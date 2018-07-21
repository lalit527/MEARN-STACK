const fileHelper = require('./filehelper');

const {
  todo
} = fileHelper;

let args = process.argv.slice(2);

if(args[0] === 'show') {
  todo.readData().then((data) => {
    console.log(data);
  });
} else if(args[0] === 'new') {
  let data = args[1];
  todo.writeData(data).then((data) => {
    console.log(data);
  });
} else if(args[0] === 'add') {
  todo.readData().then((data) => {
    let newData = data + '\n' + args[1];
    todo.writeData(newData).then((result) => {
      console.log(result);
    });
  });
}
