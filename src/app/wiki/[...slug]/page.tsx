import { MDXComponents } from "mdx/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer2/hooks";

import Age from "@/components/Age";
import HeaderImage from "@/components/HeaderImage";
import { buildTree, getPaths, Tree } from "@/components/Lists";
import Social from "@/components/Social";

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
  HeaderImage: ({ src, alt }) => <HeaderImage src={src} alt={alt} />,
};

const Page = ({ params }: { params: { slug: string[] } }) => {
  const page = allPages.find(
    (page) => page._raw.flattenedPath === params.slug.join("/")
  );

  if (!page) notFound();

  const MDXContent = useMDXComponent(page.body.code);

  return (
    <article className="prose lg:prose-xl">
      <h1>{page.title}</h1>
      <MDXContent components={mdxComponents} />
      <div className="divider"></div>
      <h3>{page.title} Subpages</h3>
      <Tree
        items={buildTree(getPaths(allPages), allPages, (value) =>
          value.startsWith(`wiki/${page._id}`)
        )}
      />
    </article>
  );
};

export default Page;
