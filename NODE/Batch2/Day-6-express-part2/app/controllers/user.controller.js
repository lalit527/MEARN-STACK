const express = require('express');
const mongoose = require('mongoose');
const userModel = mongoose.model('User');

const userAll = (req, res) => {
  res.send({data: 'all'});
}
const userOne = (req, res) => {
  res.send({data: 'all'});
}

module.exports = {
  userAll,
  userOne
}