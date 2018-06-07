const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
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
