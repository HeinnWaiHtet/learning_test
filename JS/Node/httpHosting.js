const http = require("http");

const requestListener = function (req, res) {
  console.log(req.headers);
  res.writeHead(200);
  res.end("Hello");
};

const server = http.createServer(requestListener);
server.listen(8080);
