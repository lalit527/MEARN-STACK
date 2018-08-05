const express = require('express');
const mongoose = require('mongoose');
const userModel = mongoose.model('User');

const save = (req, res) => {
  console.log(req.body);
  const user = new userModel({
    firstName: req.body.fname,
    lastName: req.body.lname,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password
  });
  user.save((err, result) => {
    if(err) {
      res.send({data: err});
      return;
    }
    console.log(result);
    res.send({data: result});
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