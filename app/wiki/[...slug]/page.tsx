import { MDXComponents } from "mdx/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

import Age from "components/Age";

import { allPages } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allPages.map((page) => ({ slug: page.url.split("/") }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const page = allPages.find(
    (page) => page._raw.flattenedPath === params.slug.join("/")
  );
  if (!page) throw new Error(`page not found for slug: ${params.slug}`);
  return { title: `Nat Welch | ${page.title}` };
};

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Age: () => <Age />,
};

const PageLayout = ({ params }: { params: { slug: string[] } }) => {
  const page = allPages.find((page) => page.url === params.slug.join("/"));
  if (!page) notFound();

  const MDXContent = useMDXComponent(page.body.code);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0">
        <MDXContent components={mdxComponents} />
      </div>
    </article>
  );
};

export default PageLayout;