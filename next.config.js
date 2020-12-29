const { createSecureHeaders } = require("next-secure-headers");
const port = process.env.PORT || 8080;
module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  productionBrowserSourceMaps: true,
  env: {
    GRAPHQL_ORIGIN: process.env.GRAPHQL_ORIGIN,
    AUTH0_CLIENT_ID: "MwFD0COlI4F4AWvOZThe1psOIletecnL",
    AUTH0_DOMAIN: "icco.auth0.com",
    DOMAIN: process.env.DOMAIN || `http://localhost:${port}`,
    PORT: port,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
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
                "https://graphql.natwelch.com/graphql",
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
                "https://a.natwelch.com",
                "https://icco.imgix.net",
              ],
              scriptSrc: [
                "'self'",
                "blob:",
                "'unsafe-inline'",
                "'unsafe-eval'",
                "https://a.natwelch.com/tracker.js",
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
};
