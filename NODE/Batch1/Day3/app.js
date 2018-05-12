const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/about', (req, res) => {
  let obj = {
    key: 'value1',
    key2: {
      key: 'value'
    }
  }
  res.send(obj);
});

app.listen('7725');