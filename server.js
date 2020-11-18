const express = require("express");
const fs = require("fs");
const helmet = require("helmet");
const next = require("next");
const { parse } = require("url");
const { join } = require("path");
const {
  SSLMiddleware,
  NELMiddleware,
  ReportToMiddleware,
} = require("@icco/react-common");

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.set("trust proxy", true);
  server.use(SSLMiddleware());
  server.use(NELMiddleware());
  server.use(ReportToMiddleware("natwelch"));

      server.use(helmet.dnsPrefetchControl());
      server.use(helmet.expectCt());
      server.use(helmet.frameguard());
      server.use(helmet.hidePoweredBy());
      server.use(helmet.hsts());
      server.use(helmet.ieNoOpen());
      server.use(helmet.noSniff());
      server.use(helmet.permittedCrossDomainPolicies());
      server.use(helmet.xssFilter());

      server.use(
        helmet.referrerPolicy({ policy: "strict-origin-when-cross-origin" })
      );

      let directives = {
        upgradeInsecureRequests: [],
        defaultSrc: [
          "'self'",
          "https://icco.auth0.com/",
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
        reportUri: "https://reportd.natwelch.com/report/writing",
        reportTo: "default",
      };

  server.use(function (req, res, next) {
    var host = req.header("host");
    if (host == "www.natwelch.com") {
      res.redirect(302, "https://natwelch.com" + req.url);
    } else {
      next();
    }
  });

  server.get("/resume", (req, res) => {
    res.redirect(302, "https://resume.natwelch.com");
  });

  server.get("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    return handle(req, res, parsedUrl);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
