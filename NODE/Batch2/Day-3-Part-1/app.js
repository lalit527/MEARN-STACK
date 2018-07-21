const fs = require('fs');
let args = process.argv.slice(2);


// fs.readFile('task.txt', (err, data) => {
//   if(err) {
//     console.log(err);
//     return;
//   }
//   console.log(data.toString());
// })

let data = fs.readFileSync('task.txt');
console.log(data.toString());

fs.writeFile('task.txt', 'abcd', (err) => {
  if(err) {
    console.log(err);
    return;
  }
});


console.log(2);