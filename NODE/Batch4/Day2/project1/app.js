const http = require('http');
let handler = (req, res) => {
  console.log(req.url);
  res.write('<h1>Hello World</h1>');
  setTimeout(() => {
    res.write('<h2>A Node Server</h2>');
  }, 5000);
  res.end();
}
const server = http.createServer(handler);

server.listen(7002, () => {
  console.log(`Server started on port 7002`);
})