import TableTree from "@atlaskit/table-tree";
import Layout from "components/Layout";
import { TextHeaderOne } from "components/TextHeader";
import fs from "fs";
import matter from "gray-matter";
import { getPaths, slugToFilePath } from "lib/mdx";
import Head from "next/head";
import Link from "next/link";

function Wiki({ paths, pathData }) {
  const treeItems = paths.map((path) => {
    return {
      id: path,
      content: pathData[path],
      children: [],
    };
  });
  return (
    <Layout>
      <Head>
        <title>Nat Welch | Wiki</title>
      </Head>

      <TextHeaderOne>Wiki</TextHeaderOne>

      <TableTree items={treeItems} />

      <ul>
        {paths.map((element: string) => {
          return (
            <li key={element}>
              <Link href={`/wiki/${element}`}>
                <a sx={{ textTransform: "capitalize", cursor: "pointer" }}>
                  {pathData[element].title ?? element}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const paths = await getPaths();
  const pathData = paths.reduce((prev, current) => {
    const postFilePath = slugToFilePath(current);
    const source = fs.readFileSync(postFilePath);
    const { data } = matter(source);
    return {
      ...prev,
      [current]: data,
    };
  }, {});

  return {
    props: {
      paths,
      pathData,
    },
  };
};

export default Wiki;
