import "style.css";

import Head from "next/head";

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
  const body = JSON.stringify(metric);
  const url = "https://reportd.natwelch.com/analytics/natwelch";

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: "POST", keepalive: true });
  }
}

export default WWW;
