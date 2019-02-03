// const express = require('express');
// const router = express.Router();
const userController = require('./user.controller');
const path = require('path');


const routes = (router) => {
  router.get('/users', (req, res) => {
    userController.showProfile(req, res);
  });

  router.get('/user/:id', (req, res) => {
    userController.showUserDetail(req, res);
  });

  router.post('/user/update/:id', (req, res) => {
    userController.updateUserDetail(req, res);
  });

  router.get('/signup', (req, res) => {
    userController.getSignup(req, res);
  });

  router.post('/signup', (req, res) => {
    userController.addUser(req, res);
  });

  router.get('/login', (req, res) => {
    userController.getLoginUser(req, res);
  });

  router.post('/login', (req, res) => {
    userController.loginUser(req, res);
  });
};

module.exports = routes;