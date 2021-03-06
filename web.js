var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var indexbuffer = fs.readFileSync('index.html');
var indexoutput = indexbuffer.toString('utf-8');

app.get('/', function(request, response) {
  response.send(indexoutput);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
