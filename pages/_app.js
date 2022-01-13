import "style.css";

import Head from "next/head";
import Router from "next/router";

function WWW({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link
          rel="webmention"
          href="https://webmention.io/natwelch.com/webmention"
        />
        <link rel="pingback" href="https://webmention.io/natwelch.com/xmlrpc" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// Will be called once for every metric that has to be reported.
export function reportWebVitals(metric) {
  // These metrics can be sent to any analytics service
  console.log(metric);
}

export default WWW;
