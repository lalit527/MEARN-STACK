const http = require('http');
let handler = (req, res) => {
  console.log(req.url);
  // console.log(req.method);
  // console.log(req.headers);
  if (req.url === '/') {
    res.write('<h1>Hello World</h1>');
  } else if (req.url === '/node') {
    res.write('<h1>Hello Node</h1>');
  } else if (req.url === '/python') {
    res.setHeader('x-auth-token', 'khebwfhbelwbbjb');
    res.write('<h1>Hello Node</h1>');
    res.write(`<form method="post" action="/save_user">
                <input type="text" name="name" placeholder="name">
                <input type="submit" value="Submit">
              </form>`);
  } else if (req.method === 'POST' && req.url === '/save_user') {
    console.log(req);
  }
  res.end();
}
const server = http.createServer(handler);

server.listen(7002, () => {
  console.log(`Server started on port 7002`);
});