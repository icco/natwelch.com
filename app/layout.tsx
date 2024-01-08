import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";

const font = Roboto({
  weight: "400",
  subsets: ["latin"],
});

// TODO: Not currently supported by app router.
// Will be called once for every metric that has to be reported.
//export function reportWebVitals(metric) {
//  const body = JSON.stringify(metric);
//  const url = "https://reportd.natwelch.com/analytics/natwelch";
//
//  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
//  if (navigator.sendBeacon) {
//    navigator.sendBeacon(url, body);
//  } else {
//    fetch(url, { body, method: "POST", keepalive: true });
//  }
//}

export const metadata: Metadata = {
  title: "Nat Welch",
  other: {
    webmention: "https://webmention.io/natwelch.com/webmention",
    pingback: "https://webmention.io/natwelch.com/xmlrpc",
    charset: "utf-8",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  initialScale: 1.0,
  width: "device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
