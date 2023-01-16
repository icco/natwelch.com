import Layout from "components/Layout";
import { Tree } from "components/Lists";
import { TextHeaderOne } from "components/TextHeader";
import { buildTree } from "lib/mdx";
import Head from "next/head";

function Wiki({ pathData }) {
  return (
    <Layout>
      <Head>
        <title>Nat Welch | Wiki</title>
      </Head>

      <TextHeaderOne>Wiki</TextHeaderOne>

      <p>
        This is a constantly growing wiki of things I am working on and thinking
        about.
      </p>

      <Tree key="root" items={pathData}></Tree>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const pathData = await buildTree();

  return {
    props: {
      pathData,
    },
  };
};

export default Wiki;
