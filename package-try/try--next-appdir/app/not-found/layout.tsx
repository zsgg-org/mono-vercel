import { getCategories } from '#/app/api/categories/getCategories';
import { ClickCounter } from '#/ui/click-counter';
import { TabGroup } from '#/ui/tab-group';
import React from 'react';

const title = 'Not Found';

export const metadata = {
  openGraph: {
    images: [`/api/og?title=${title}`],
    title,
  },
  title,
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categories = await getCategories();

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/not-found"
          items={[
            {
              text: 'Home',
            },
            ...categories.map((x) => ({
              slug: x.slug,
              text: x.name,
            })),
            {
              slug: 'does-not-exist',
              text: 'Category That Does Not Exist',
            },
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
