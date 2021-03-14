import React from "react";
import Head from "next/head";

import App from "components/App";
import Header from "components/Header.js";

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
