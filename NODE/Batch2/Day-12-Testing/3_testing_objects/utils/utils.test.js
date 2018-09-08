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
})


/*
it('Gives sum of two given numbers', () => {
    let res = util.add(10, 15);
    expect(res).to.equal(25);
  });
  
  it('Squares a given number', () => {
    let res = util.square(10);
    expect(res).to.equal(100);
  });
*/

/*
Testing a single file
npm test mocha utils.test.js
*/