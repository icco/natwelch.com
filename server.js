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
  server.use(helmet());
  server.set("trust proxy", true);
  server.use(SSLMiddleware());
  server.use(NELMiddleware());
  server.use(ReportToMiddleware("natwelch"));

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
    let path = join(__dirname, "static", parsedUrl.pathname);
    if (fs.existsSync(path)) {
      let stat = fs.lstatSync(path);
      if (stat.isFile()) {
        app.serveStatic(req, res, path);
        return;
      }

      if (stat.isDirectory()) {
        let index = join(path, "index.html");
        if (fs.existsSync(index)) {
          app.serveStatic(req, res, path);
          return;
        }
      }
    }

    return handle(req, res, parsedUrl);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
