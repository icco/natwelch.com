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

      <Social
        className="items-center justify-center mt5 w4 w-100-ns center"
      />
    </div>
  </main>
);

export default Index;
