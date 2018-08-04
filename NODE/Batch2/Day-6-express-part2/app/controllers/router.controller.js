const express = require('express');
const routes = express.Router();
const controller = require('./controllers');

module.exports.routeController = function(app) {
  console.log('router');
  routes.get('/all', (req, res) => {
    controller.user.userAll(req, res);
  });
  routes.get('/one', (req, res) => {
    controller.user.userOne(req, res);
  });

  app.use('/blogpost/v1', routes);
};