var express = require('express');

var app = express.createServer(express.logger());

var indexbuffer = fs.readFileSync('index.html');

indexbuffer.toString('utf-8')

app.get('/', function(request, response) {
  response.send(indexbuffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
