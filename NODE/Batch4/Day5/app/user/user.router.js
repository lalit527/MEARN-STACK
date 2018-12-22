const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('./user.controller');

const routes = () => {
  router.get('/profile', (req, res) => {
    userController.showProfile(req, res);
  });

  router.post('/signup', (req, res) => {
    console.log(req.body);
    console.log(req.connection.remoteAddress);
    res.send('Hello World from Node');
  });
  return router;
};

module.exports = routes;