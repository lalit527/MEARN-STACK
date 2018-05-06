const fs = require('fs');

const args = process.argv.slice(2);

console.log(args);

var obj = {
  id: '',
  task: '',
  description: '',
  estimatedTime: '',
  status: '',
}

if (args[0] === 'add') {
  fs.writeFile('file.txt', args[1], (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
} else if(args[0] === 'update') {
  let task = `\n${args[1]}`;
  fs.appendFile('file.txt', task, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
  });
} else if(args[0] === 'delete') {
  fs.truncate('file.txt', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
} else {
  fs.readFile('file.txt', (err, data) => {
    console.log(data.toString());
  })
}