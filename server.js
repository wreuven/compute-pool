var server_port       = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
var http = require('http');
 
http.createServer(  function (request, response){
 
 response.writeHead(200);
 
 request.on('data', function(message) {
 
   response.write(message);
 
 });
 
 request.on('end', function() {
    response.end();
 });
 
}).listen(server_port);
