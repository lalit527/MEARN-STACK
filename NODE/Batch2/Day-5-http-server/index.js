const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.write('Hello World');
//   res.write('Hello from Node JS');
//   res.write('Node is awesome');
//   res.write('Nodemon is awesome');
//   res.write('I have created a server');
//   res.end();
// });

const server = http.createServer((req, res) => {
  // console.log(req);
  // res.write('Hello World');
  // res.write('Hello from Node JS');
  // res.write('Node is awesome');
  // res.write('Nodemon is awesome');
  // res.write('I have created a server');
  setImmediate(() => {
    res.write('Hello World');
    res.end(); // comment and uncomment the below to see the changes
  });
  // res.end(); // comment me
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