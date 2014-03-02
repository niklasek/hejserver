var http = require('http');

var server = http.createServer(function(request, response) {
  response.write('Hej på dej!');
  response.end();
});

server.listen(3000);