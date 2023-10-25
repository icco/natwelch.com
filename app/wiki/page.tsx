import { Metadata } from "next";
import Link from "next/link";

import { allPages, Page } from "contentlayer/generated";

function PageCard(page: Page) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={page.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {page.title}
        </Link>
      </h2>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Nat Welch | Wiki",
};

export default function Home() {
  const pages = allPages;

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">
        Next.js + Contentlayer Example
      </h1>
      {pages.map((page, idx) => (
        <PageCard key={idx} {...page} />
      ))}
    </div>
  );
}
