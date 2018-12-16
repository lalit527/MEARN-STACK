const fs = require('fs');

let args = [...process.argv.slice(2)];

console.log(args);

let op = args[0];

let value = args.slice(1);

if (op === 'add') {
  fs.writeFile('todo.txt', value.join(' '), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File write complet');
    }
  })
} else if (op === 'show') {
  fs.readFile('todo.txt', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.toString());
    }
  })
}
