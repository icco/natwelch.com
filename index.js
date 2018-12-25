var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use(serveStatic(__dirname));

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("http://0.0.0.0:" + port);
});
