module.exports.add = (a, b) =>  a + b;

module.exports.square = (a) => a ** 2;

module.exports.setName = (fullName) => {
  var user = {};
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};