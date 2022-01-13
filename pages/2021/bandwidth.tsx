import App from "components/App";
import Header from "components/Header";
import Head from "next/head";
import React from "react";

const Bandwidth = () => {
  return (
    <App>
      <Head>
        <title>Nat Welch | Bandwidth Calculator</title>
      </Head>
      <Header noLogo />
    </App>
  );
};

export default Bandwidth;
