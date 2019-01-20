const express = require('express');
const router = express.Router();
const path = require('path');

const routes = () => {
  
  console.log(path.join(__dirname, 'index.html'));
  router.get('/', (req, res, next) => {
    res.send('Hello World');
  });

  router.get('/node', (req, res) => {
    res.set(
      {
        'Content-Type': 'text/html',
        'Content-Length': '123',
        'ETag': '12345'
      }
    );
    res.status(302).
      sendFile(path.join(__dirname, 'index.html'));
  });

  router.post('/save', (req, res) => {
    console.log(req.body);
    console.log(req.connection.remoteAddress);
    res.send('Hello World from Node');
  });
  return router;
};

module.exports = routes;