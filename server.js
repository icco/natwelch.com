const fs = require("fs");
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { join } = require("path");

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const path = join(__dirname, "static", parsedUrl.pathname);
    if (fs.existsSync(path)) {
      app.serveStatic(req, res, path);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
