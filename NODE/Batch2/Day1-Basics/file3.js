let a = 1;

// exports = function bar() {
//   return {key: 'value'}
// }

// exports = function foo() {
//   console.log('showing this value', 1);
// }


// module.exports = function foo() {
//   console.log('showing this value', 1);
// }s

exports.bar = function() {
  return {key: 'value'}
}

