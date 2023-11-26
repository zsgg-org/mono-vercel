import { TabGroup } from '#/ui/tab-group';
import React from 'react';

const title = 'Styling';

export const metadata = {
  openGraph: {
    images: [`/api/og?title=${title}`],
    title,
  },
  title,
};

const items = [
  {
    slug: 'global-css',
    text: 'Global CSS',
  },
  {
    slug: 'css-modules',
    text: 'CSS Modules',
  },
  {
    slug: 'styled-components',
    text: 'Styled Components',
  },
  {
    slug: 'styled-jsx',
    text: 'Styled JSX',
  },
  {
    slug: 'tailwind',
    text: 'Tailwind CSS',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <TabGroup
        path="/styling"
        items={[
          {
            text: 'Home',
          },
          ...items,
        ]}
      />
      <div>{children}</div>
    </div>
  );
}
