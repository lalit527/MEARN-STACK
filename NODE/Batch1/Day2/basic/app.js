const http = require('http');

const server = http.createServer((req, res) => {
  res.write(`{data: 'helloWorld'}`);
  res.end();
});

server.listen(3200);