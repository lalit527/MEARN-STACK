const file = require('./file2');
const file2 = require('./file2');
console.log("========+++++++++++==========");
console.log(file);
console.log("==================");
console.log(file2);

console.log(Object.keys(require.cache));
console.log(require.resolve);
console.log(require.compile);