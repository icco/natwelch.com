const { createSecureHeaders } = require("next-secure-headers");
const { withContentlayer } = require('next-contentlayer')

const port = process.env.PORT || "8080";

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  productionBrowserSourceMaps: true,
  env: {
    GRAPHQL_ORIGIN: process.env.GRAPHQL_ORIGIN || "https://graphql.natwelch.com/graphql",
    AUTH0_CLIENT_ID: "MwFD0COlI4F4AWvOZThe1psOIletecnL",
    AUTH0_DOMAIN: "icco.auth0.com",
    DOMAIN: process.env.DOMAIN || `http://localhost:${port}`,
    PORT: port,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  eslint: {
    dirs: ['app', 'lib', 'components', 'wiki'],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "https://natwelch.com/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: [
                "'self'",
                "https://icco.auth0.com/",
                "https://*.natwelch.com/",
              ],
              connectSrc: [
                "'self'",
                "https://*.natwelch.com/",
              ],
              styleSrc: [
                "'self'",
                "'unsafe-inline'",
                "https://fonts.googleapis.com/",
              ],
              fontSrc: ["https://fonts.gstatic.com"],
              imgSrc: [
                "'self'",
                "blob:",
                "data:",
                "https://icco.imgix.net",
              ],
              scriptSrc: [
                "'self'",
                "blob:",
                "'unsafe-inline'",
                "'unsafe-eval'",
              ],
              objectSrc: ["'none'"],
              reportUri: "https://reportd.natwelch.com/report/natwelch",
              reportTo: "default",
            },
          },
          referrerPolicy: "strict-origin-when-cross-origin",
          expectCT: true,
        }),
      },
    ];
  },
});
