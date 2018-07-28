const http = require('http');
const parse = require('querystring');

const { URL } = require('url');

const option = new URL("http://localhost:8005");

http.get(option, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  })

  res.on('end', () => {
    console.log(JSON.stringify(data));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

const postData = parse.stringify({
  'msg': 'Hello World!'
});

const options = {
  hostname: 'localhost',
  port: 8005,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();