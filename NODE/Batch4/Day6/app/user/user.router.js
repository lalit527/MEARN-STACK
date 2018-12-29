// const express = require('express');
// const router = express.Router();
const userController = require('./user.controller');
const path = require('path');


const routes = (router) => {
  router.get('/profile', (req, res) => {
    userController.showProfile(req, res);
  });

  router.post('/signup', (req, res) => {
    userController.addUser(req, res);
  });
};

module.exports = routes;