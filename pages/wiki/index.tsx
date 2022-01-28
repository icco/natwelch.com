import Layout from "components/Layout";
import { TextHeaderOne } from "components/TextHeader";
import { getPaths } from "lib/mdx";
import Head from "next/head";
import Link from "next/link";

function Wiki({ paths }) {
  return (
    <Layout>
      <Head>
        <title>Nat Welch | Wiki</title>
      </Head>

      <TextHeaderOne>Wiki</TextHeaderOne>

      <ul>
        {paths.map((element: string) => {
          return (
            <li key={element}>
              <Link href={`/wiki/${element}`}>{element}</Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
export const getStaticProps = async () => {
  const paths = await getPaths();

  return {
    props: {
      paths,
    },
  };
};

export default Wiki;
