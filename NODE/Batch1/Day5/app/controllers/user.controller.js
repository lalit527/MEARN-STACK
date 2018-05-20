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
  });
  routes.get('/login', (req, res) => {
    res.render('login');
  });
  routes.get('/signup', (req, res) => {
    res.render('signup');
  });
  routes.post('/signup', (req, res) => {
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let username = req.body.username;
    let password = req.body.pwd;
    console.log(fname, lname, email, mobile, username, password)
    let user = new userModel({
      fname: fname,
      lname: lname,
      email: email,
      mobile: mobile,
      username: username,
      password: password
    });
    user.save((err, result) => {
      if(err) {
        return res.send('some error'+err);
      }
      res.redirect('/tweet/v1/all');
    });
  });
  routes.get('/', (req, res) => {
    
    res.send({'data':'Hello World'});
  })
  app.use('/user', routes);
}