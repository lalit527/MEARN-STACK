const http = require('http');
const parse = require('querystring');

const server = http.createServer((req, res) => {
  if(req.method === 'POST') {
    let body = [];
    req.on('data', (chunk) => {
      console.log('ch',chunk.toString());
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      res.write(`{data: ${body}}`);
      console.log(body);
      res.end();
      // at this point, `body` has the entire request body stored in it as a string
    });
  } else if (req.method == "GET") {
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