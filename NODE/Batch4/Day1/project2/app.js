const http = require('http');

const server = http.createServer(function reqSolver(req, res) {
  console.log(req.url);
  res.write(`<h1>Hello World</h1>`);
  res.write(`<h2>Hello World</h2>`);
  res.write(`<h3>Hello World</h3>`);
  res.end();
});

// server.listen(7005);

server.listen(7005, () => {
  console.log(`Listening on port 7005`);
});