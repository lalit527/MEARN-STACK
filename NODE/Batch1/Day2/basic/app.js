const http = require('http');

const server = http.createServer((req, res) => {
  if(req.method === 'POST') {
    res.write(`{data: 'FROM POST'}`);
  } else {
    let url = req.url;
    if (url.substr(1) === 'add') {
      res.write(`{data: 'helloWorld'}`);
    } else if(url.substr(1) === 'update') {
      res.write(`{data: 'helloWorld2'}`);
    } else {
      res.write(`{data: 'Unknown'}`);
    }
  }
  
  
  res.end();
});

server.listen(3200);