const express = require('express');
const routes = express.Router();
const controller = require('./controllers');

module.exports.routeController = function(app) {
  console.log('router');
  routes.post('/save', (req, res) => {
    controller.user.save(req, res);
  });
  routes.get('/all', (req, res) => {
    controller.user.findAll(req, res);
  });

  app.use('/blogpost/v1', routes);
};