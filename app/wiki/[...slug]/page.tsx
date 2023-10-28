import { MDXComponents } from "mdx/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

import Age from "components/Age";
import Social from "components/Social";

import { allPages } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allPages.map((page) => ({ slug: page._raw.flattenedPath.split("/") }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const page = allPages.find(
    (page) => page._raw.flattenedPath === params.slug.join("/")
  );

  if (!page) notFound();

  return { title: `Nat Welch | ${page.title}` };
};

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Age: () => <Age />,
  Social: () => <Social />,
};

const Page = ({ params }: { params: { slug: string[] } }) => {
  const page = allPages.find(
    (page) => page._raw.flattenedPath === params.slug.join("/")
  );

  if (!page) notFound();

  const MDXContent = useMDXComponent(page.body.code);

  return (
    <div className="mx-auto max-w-xl py-8">
      <article className="prose lg:prose-xl">
        <MDXContent components={mdxComponents} />
      </article>
    </div>
  );
};

export default Page;
