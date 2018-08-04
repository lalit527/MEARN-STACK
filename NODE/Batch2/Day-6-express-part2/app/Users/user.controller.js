const express = require('express');
const mongoose = require('mongoose');
const userModel = mongoose.model('User');

const save = (req, res) => {
  // res.send({data: 'all'});
  const user = new userModel({
    firstName: 'Sample',
    lastName: 'Lanme',
    email: 'sample@gmail.co',
    mobile: 1234,
    password: 'test1234'
  });
  user.save((err, result) => {
    if(err) {
      res.send({data: err});
      return;
    }
    console.log(result);
    res.send({data: 'all'});
  });
}
const findAll = (req, res) => {
  // res.send({data: 'all'});
  userModel.find({}, (err, result) => {
    if(err) {
      res.send({data: err});
      return;
    }
    console.log(result);
    res.send({data: result});
  })
}

module.exports = {
  save,
  findAll
}