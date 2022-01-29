import Blockquote from "components/Blockquote";
import Layout from "components/Layout";
import { ListItem, OrderedList, UnorderedList } from "components/Lists";
import TextHeader, {
  TextHeaderOne,
  TextHeaderThree,
  TextHeaderTwo,
} from "components/TextHeader";
import fs from "fs";
import matter from "gray-matter";
import { getPaths, POSTS_PATH } from "lib/mdx";
import dynamic from "next/dynamic";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { Divider, Paragraph } from "theme-ui";

// Custom components/renderers to pass to MDX. Since the MDX files aren't
// loaded by webpack, they have no knowledge of how to handle import
// statements. Instead, you must include components in scope here.
//
// It also works with dynamically-imported components, which is especially
// useful for conditionally loading components for certain routes.
const components = {
  Age: dynamic(() => import("components/Age")),
  Head,
  Social: dynamic(() => import("components/Social")),
  TextHeader,
  h1: TextHeaderOne,
  h2: TextHeaderTwo,
  h3: TextHeaderThree,
  blockquote: Blockquote,
  p: Paragraph,
  hr: Divider,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <Head>
        <title>Nat Welch | {frontMatter.title}</title>
      </Head>
      <MDXRemote {...source} components={components} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = `${path.join(POSTS_PATH, ...params.slug)}.mdx`;

  if (!fs.existsSync(postFilePath)) {
    return { notFound: true }
  }

  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getPaths();

  return {
    paths: paths.map((slug) => ({ params: { slug: slug.split("/") } })),
    fallback: false,
  };
};
