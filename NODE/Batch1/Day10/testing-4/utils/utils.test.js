const expect = require('expect');
const assert = require('assert');
const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
});

it('should async square a number', (done) => {
  utils.asyncSquare(5, (res) => {
    expect(res).toBe(25).toBeA('number');
    done();
  });
});

it('should verify sum of two number within range', () => {
  
  return utils.verifyRange(5, 10).then((res) => {
    debugger;
    console.log(res);
    expect(res).toBe(15);
  });
});


it('should verify sum of two number within range', async () => {
  
  let res = await utils.verifyRange(5, 10);
  expect(res).toBe(15);
  
});

// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set firstName and lastName', () => {
  var user = {location: 'India', age: 25};
  var res = utils.setName(user, 'Lalit Yadav');

  expect(res).toInclude({
    firstName: 'Lalit',
    lastName: 'Yadav'
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'Lalit'}).toNotEqual({name: 'Lalit'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Lalit',
//     age: 25,
//     location: 'India'
//   }).toExclude({
//     age: 23
//   })
// });
