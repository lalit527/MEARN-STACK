process.env.NODE_ENV = 'test';

const {expect} = require('chai');
const chai = require('chai');
const {should} = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

const app = require('./../app');
const router = require('./../app/router.controller');
const userModel = mongoose.model('User');

chai.use(chaiHttp);

describe('Users', () => {
  it('checks for user object', (done) => {
    chai.request(router)
      .get('/all')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      })
  })
});