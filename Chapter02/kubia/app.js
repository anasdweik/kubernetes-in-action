const http = require('http');
const os = require('os');

console.log("Updated Kubia server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("Hello! Prof Lak Adunuthala, It is Anas Aldweik You've hit the server hosted on " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);
