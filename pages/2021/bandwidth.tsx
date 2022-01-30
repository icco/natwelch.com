import Header, { Size } from "components/Header";
import Head from "next/head";

const Bandwidth = () => {
  return (
    <main>
      <Head>
        <title>Nat Welch | Bandwidth Calculator</title>
      </Head>
      <Header size={Size.Medium} navtext="Bandwidth" />
    </main>
  );
};

export default Bandwidth;
