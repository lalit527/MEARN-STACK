const mongoose = require('mongoose');
const express = require('express');

const routes = express.Router();
const userModel = mongoose.model('User');

module.exports.userController = function(app) {
  routes.get('/all', (req, res) => {
    res.send('From Users');
  }),
  routes.get('/user/:id', (req, res) => {
    let id = req.params['id'];
    res.send(`From user ${id}`);
  })
  app.use('/user', routes);
}