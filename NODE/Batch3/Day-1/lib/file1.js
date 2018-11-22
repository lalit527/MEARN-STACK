let a = 1;
let foo = function() {
  console.log(1);
}

global.a = a;

// module.exports = a;
// module.exports = 2;

// module.exports.a = a;
// module.exports.b = 2;

// exports = foo;
// module.exports = foo;

// module.exports.foo = foo;
// exports.foo = foo;

// (function(exports, require, module, __filename, __dirname) {
//   let a = 1;
// })();
// console.log(module);
// console.log(require);
// console.log(exports);
// console.log(__filename);
// console.log(__dirname);
// console.log(process);


// let obj = {
//   key: {a: 1}
// }

// let key = obj.key;