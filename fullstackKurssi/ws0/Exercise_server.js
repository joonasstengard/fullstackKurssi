var http = require("http");

var server = http.createServer(function(request,response){

    if(request.url === "/"){
        response.writeHead(200,{'Content-Type': 'text/plain'});
        response.end('Hello ekalta kotisivulta!');
    }
    if(request.url === "/own"){
        response.writeHead(200,{'Content-Type': 'text/plain'});
        response.write("<h1>Own page headingi</h1>");
        response.end('<h2>Hello own pagelta</h2>');
    }
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Serveri on runnaamassa http://localhost:%d', port);