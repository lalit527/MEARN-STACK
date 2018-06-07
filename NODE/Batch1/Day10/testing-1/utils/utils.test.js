const util = require('./utils');
const assert = require('assert');
const expect = require('expect');

describe('Utility Function', () => {
  
  it('Add two given numbers', () => {
    let res = util.add(10, 5);
    assert.equal(res, 15);
  });

  it('It should return a number', () => {
    let res = util.add(10, 5);
    expect(res).toBe(9).toBeA('number');
  })
  
});