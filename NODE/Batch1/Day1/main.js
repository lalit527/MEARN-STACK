let a = 1;
module.exports = function() {
  return a;
}
module.exports.foo = function() {
  return 'foo';
}
global.b = 'Hello World';