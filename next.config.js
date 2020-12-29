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
              //  default-src 'none'
              defaultSrc: [
                "'self'",
                "https://graphql.natwelch.com/graphql",
                "https://graphql.natwelch.com/photo/new",
                "https://icco.auth0.com/",
                "http://localhost:9393",
              ],
              // style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/
              styleSrc: [
                "'self'",
                "'unsafe-inline'",
                "https://fonts.googleapis.com/",
              ],
              // font-src https://fonts.gstatic.com
              fontSrc: ["https://fonts.gstatic.com"],
              // img-src 'self' data: http://a.natwelch.com https://a.natwelch.com https://icco.imgix.net
              imgSrc: [
                "'self'",
                "blob:",
                "data:",
                "https://a.natwelch.com",
                "https://icco.imgix.net",
                "https://storage.googleapis.com",
                "https://writing.natwelch.com",
              ],
              // script-src 'self' 'unsafe-eval' 'unsafe-inline' http://a.natwelch.com/tracker.js https://a.natwelch.com/tracker.js
              scriptSrc: [
                "'self'",
                "blob:",
                "'unsafe-inline'",
                "'unsafe-eval'",
                "https://a.natwelch.com/tracker.js",
              ],
              // object-src 'none';
              objectSrc: ["'none'"],
              // worker-src 'self' blob:
              // https://developers.google.com/web/updates/2018/09/reportingapi#csp
              reportUri: "https://reportd.natwelch.com/report/writing",
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
