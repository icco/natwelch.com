import { BlogPost } from "components/BlogPost";
import Header, { Size } from "components/Header";
import Social from "components/Social";
import { getLatestBlogPost } from "lib/graphql";
import Head from "next/head";

const Index = ({ post }) => (
  <main
    sx={{
      maxWidth: 768,
      mx: [0, "auto"],
      width: "100%",
      flex: "1 1 auto",

      a: {
        cursor: "pointer",
        color: "link",
        textDecoration: "none",
        ":link,:any-link,:visited": { color: "link" },
        ":focus,:active,:hover": {
          color: "secondary",
          textDecoration: "underline",
        },
      },
    }}
  >
    <Head>
      <title>Nat Welch</title>
      <meta property="og:title" content="Nat Welch" key="title" />
    </Head>

    <div
      sx={{
        alignContent: "center",
        pb: 3,
        mt: [5, 0],
      }}
    >
      <Header size={Size.Large} />

      <div
        sx={{
          px: [3, 4, 5],
          py: 0,
          mt: 0,
        }}
      >
        <Social />
      </div>
    </div>

    <BlogPost post={post} />
  </main>
);

export const getStaticProps = async () => {
  const post = await getLatestBlogPost();
  return {
    props: {
      post,
    },
  };
};

export default Index;
