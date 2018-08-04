const express = require('express');
const routes = express.Router();
const user = require('./user.controller');

module.exports.routeController = function(app) {
  console.log('router');
  routes.get('/all', (req, res) => {
    user.userAll(req, res);
  });
  routes.get('/one', (req, res) => {
    user.userOne(req, res);
  });

  app.use('/blogpost/v1', routes);
};