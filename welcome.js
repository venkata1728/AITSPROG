var http=require("http");
http.createServer(function(request,response){
    response.writeHead(200,{"Content-type":"text/plain"})
    response.end("Hello World")
}).listen(50)
console.log("ServerRunning at .........")