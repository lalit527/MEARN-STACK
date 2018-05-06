// (function(module, require, exports, __filename, __dirname){

// })();

// const mod2 = require('module');
// console.log(mod2)

let cb = function(param1) {
  console.log(param1);
}
foo(1, cb);

function foo(param1, cb) {
  setTimeout(() => {
    cb(param1);
  }, 2000);
}