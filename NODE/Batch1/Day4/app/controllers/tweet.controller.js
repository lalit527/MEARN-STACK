const mongoose = require('mongoose');
const express = require('express');

const routes = express.Router();
const tweetModel = mongoose.model('Tweet');

module.exports.tweetController = function(app) {
  routes.get('/all', (req, res) => {
    tweetModel.find({}, (err, result) => {
      if(err) {
        return res.send('Some error occured');
      } 
      return res.send(result);
    })
  });
  routes.get('/tweet/:id', (req, res) => {
    let id = req.params['id'];
    res.send(`From tweet ${id}`);
  });
  routes.post('/add', (req, res) => {
    let user = req.body.user;
    let message = req.body.message;
    let tweet = new tweetModel({
      user: user,
      message: message
    });
    tweet.save((err, result) =>{
      if(err) {
        return res.send('Some error occured');
      }
      res.send(result);
    })
  });
  app.use('/tweet/v1', routes);
}