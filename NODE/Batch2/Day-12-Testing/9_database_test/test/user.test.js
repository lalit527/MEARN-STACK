process.env.NODE_ENV = 'test';

const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

const app = require('./../app');
const userModel = mongoose.model('User');


describe('Users', () => {
  
});