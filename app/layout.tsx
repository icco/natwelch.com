import { Metadata } from 'next'
import Theme from "components/Theme";
import { ThemeProvider } from "theme-ui";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
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

export const metadata: Metadata = {
  title: "Nat Welch",
  viewport: {
    viewportFit: "cover",
    initialScale: 1.0,
    width: "device-width",
  },
  other: {
    webmention: "https://webmention.io/natwelch.com/webmention",
    pingback: "https://webmention.io/natwelch.com/xmlrpc",
    charset: "utf-8",
  },
}
