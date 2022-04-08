const http = require("http");
const hostname = "0.0.0.0";
const port = 8000;

const routes = ["GET:/", "POST:/", "DELETE:/"];
const server = http.createServer();

server.on('request',(request, response) => {
        const { method, url, headers } = request;
        const searchedRoute = `${method.toUpperCase()}:${url}`;
        if(-1 < routes.findIndex((val) => { return val === searchedRoute; })) {  // nous  avons trouvé la route 
                response.writeHead(200, {'Content-type': 'text/plain'});
                response.end('Hello World\n');
        } else {
                response.writeHead(404);
                response.end('Not Found\n');
        }
});

server.listen(port, hostname, function() {
        console.log(`Server running at http://${hostname}:${port}/`);

})

