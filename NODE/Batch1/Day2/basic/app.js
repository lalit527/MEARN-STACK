const http = require('http');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
  if(req.method === 'POST') {
    let body = [];
    req.on('data', (chunk) => {
      console.log('ch',chunk.toString());
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      res.write(`{data: ${body}}`);
      console.log(parse(body));
      res.end();
      // at this point, `body` has the entire request body stored in it as a string
    });
    
  } else {
    let url = req.url;
    if (url.substr(1) === 'add') {
      res.write(`{data: 'helloWorld'}`);
    } else if(url.substr(1) === 'update') {
      res.write(`{data: 'helloWorld2'}`);
    } else {
      res.write(`{data: 'Unknown'}`);
    }
    res.end();
  }
  
  
  
});

server.listen(3200);