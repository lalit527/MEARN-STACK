module.exports.add = (a, b) =>  a + b;

module.exports.square = (a) => a ** 2;

module.exports.setName = (fullName) => {
  var user = {};
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};

module.exports.asyncAdd = (a,b, cb) => {
  setTimeout(() => {
    let res = a+b;
    return cb('', res);
  }, 0);
}

module.exports.asyncSquare = (a) => {
  return new Promise((resolve, reject) => {
    resolve(a * a);
  });
}