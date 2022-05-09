const path = require("path");
const http = require("http");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "assets")));

app.get('/', function(req, res) {
  res.status(200).send('hello world');
});

const server1 = http.createServer(app);
const server2 = http.createServer(app);
const server3 = http.createServer(app);

server1.listen(5000, function() {
  console.log('server listen on 5000 port');
});

server2.listen(5001, function() {
  console.log('server listen on 5001 port');
});

server3.listen(5002, function() {
  console.log('server listen on 5002 port');
});