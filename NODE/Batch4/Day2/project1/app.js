const http = require('http');
const fs = require('fs');
const { parse } = require('querystring');

const fileHelper = require('./fileHelper');


let handler = (req, res) => {
  console.log(req.url);
  if (req.url === '/') {
    res.write('<h1>Hello World</h1>');
    let data = fileHelper.readFileData('todo.txt');
    let result = fileHelper.writeFileData('todo1.txt', data);
    
  } else if (req.url === '/node') {
    res.write('<h1>Hello Node</h1>');
  } else if (req.url === '/python') {
    res.setHeader('x-auth-token', 'khebwfhbelwbbjb');
    res.write('<h1>Hello Node</h1>');
    res.write(`<form method="post" action="/save_user">
                <input type="text" name="task" placeholder="task">
                <input type="text" name="staus" placeholder="status">
                <input type="submit" value="Submit">
              </form>`);
  } else if (req.method === 'POST' && req.url === '/save_user') {
    let result = [];

    req.on('data', data => {
      result.push(data);
    });

    req.on('end', data => {
      console.log('result', result);
      console.log(parse(result.join(' ').toString()));
      console.log('data', data);
    });

    res.writeHead(301, {Location: '/python'});
  } else {
    res.writeHead(301, {Location: '/'});
  }
  res.end();
}
const server = http.createServer(handler);

server.listen(7002, () => {
  console.log(`Server started on port 7002`);
});