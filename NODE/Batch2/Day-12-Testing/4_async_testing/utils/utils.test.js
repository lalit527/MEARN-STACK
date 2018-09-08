const util = require('./utils');
const {expect} = require('chai');

describe('Utils', () => {
  it('Gives sum of two given numbers', () => {
    let res = util.add(10, 15);
    expect(res).to.equal(25);
  });
  
  it('Squares a given number', () => {
    let res = util.square(10);
    expect(res).to.equal(100);
  });

  describe('Testing User', () => {
    it('checks if user object is set', () => {
      let user = util.setName('Jon Doe');
      expect(user).to.deep.equal({firstName: 'Jon', lastName: 'Doe'});
    })
  });

  describe('Async Functions', () => {
    it('Should add two numbers async', (done) => {
      util.asyncAdd(10, 5, (err, res) => {
        expect(res).to.equal(15);
        done();
      })
    });

    it('Should Square a number async', (done) => {
      util.asyncSquare(10).then((data) => {
        expect(data).to.equal(100);
        done();
      })
    });

    it('Should Square a number async', async () => {
      let data = await util.asyncSquare(10);
      expect(data).to.equal(100);
    });

  })
})

