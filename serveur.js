const http = require("http");
const hostname = "0.0.0.0";
const port = 8000;

const server = http.createServer();

server.on('request',(request, response) => {
	response.writeHead(200, {'Content-type': 'text/plain'});
	response.end('Hello World\n');
});

server.listen(port, hostname, function() {
	console.log(`Server running at http://${hostname}:${port}/`);

})
