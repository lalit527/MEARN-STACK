const file4 = require('./file4');
// const file5 = require('./file5');
delete require.cache[require.resolve('./file4.js')]
const file6 = require('./file4');
const file7 = require('./file4');
console.log(file4);
console.log(file6);

// console.log(require.cache);
// console.log(require.cache);

