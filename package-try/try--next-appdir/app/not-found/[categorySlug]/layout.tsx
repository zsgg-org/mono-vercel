import { getCategories, getCategory } from '#/app/api/categories/getCategories';
import { ClickCounter } from '#/ui/click-counter';
import { TabGroup } from '#/ui/tab-group';

export default async function Layout({ children, params }: { children: React.ReactNode; params: { categorySlug: string } }) {
  // - `getCategory()` returns `notFound()` if the fetched data is `null` or `undefined`.
  // - `notFound()` renders the closest `not-found.tsx` in the route segment hierarchy.
  // - For `layout.js`, the closest `not-found.tsx` starts from the parent segment.
  // - For `page.js`, the closest `not-found.tsx` starts from the same segment.
  // - Learn more: https://nextjs.org/docs/app/building-your-application/routing#component-hierarchy.
  const category = await getCategory({ slug: params.categorySlug });
  const categories = await getCategories({ parent: params.categorySlug });

  return (
    <div className="space-y-9">
      <div>
        <div className="flex justify-between">
          <TabGroup
            path={`/not-found/${category.slug}`}
            items={[
              {
                text: 'All',
              },
              ...categories.map((x) => ({
                slug: x.slug,
                text: x.name,
              })),
              {
                slug: 'does-not-exist',
                text: 'Subcategory That Does Not Exist',
              },
            ]}
          />

          <div className="self-start">
            <ClickCounter />
          </div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
