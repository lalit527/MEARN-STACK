const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({'data': 'Hello World'});
});

app.listen('7725', () => {
  console.log('App started');
});
