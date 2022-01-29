import Header, { Size } from "components/Header";
import Social from "components/Social";
import Head from "next/head";

const Index = () => (
  <main>
    <Head>
      <title>Nat Welch</title>
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
          width: "50%",
          my: "2em",
          mx: "auto",
        }}
      >
        <Social />
      </div>
    </div>
  </main>
);

export default Index;
