const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.method);
  // res.write('Hello World');
  // res.write('Hello from Node JS');
  // res.write('Node is awesome');
  // res.write('Nodemon is awesome');
  // res.write('I have created a server');
  // res.end();
  if (req.method == "GET") {
    console.log(req.url)
    res.write('Hello World GET');
    res.end();
  }
});


server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.on('connection', (data) => {
  console.log('connection');
});
server.on('close', (data) => {
  console.log('close', data);
});

server.listen(8000, () => {
  console.log('Server started on port 8000');
})