// const express = require('express');
// const app = express();
const app = require('express')();

app.get('/', (req, res) => {
  
  // res.send('<h1 style="color:red">Hello World<h1>');
  res.set({
    'Content-Type': 'text/html',
    'Content-Length': '123',
    'ETag': '12345',
    'Access-Control-Allow-Origin': '*'
  }).status(200).send('<h1 style="color:red">Hello World<h1>');
});

app.get('/node', (req, res) => {
  res.set({
    'Content-Type': 'text/json',
    'Content-Length': '123',
    'ETag': '12345',
    'Access-Control-Allow-Origin': '*'
  }).status(200).send({
    data: 'Hello World from NodeJS'
  });
});


app.listen('8009', () => {
  console.log('Sarted Server');
});