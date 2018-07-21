const fileHelper = require('./filehelper');

const {
  todo
} = fileHelper;

let args = process.argv.slice(2);

console.log(process.argv);

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
} else if(args[0] === 'deleteall') {
  todo.deleteData().then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
} else if(args[0] === 'read') {
  todo.readOne().then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
} else if(args[0] === 'delete') {
  todo.deleteOne(args[1]).then((data) => {
    console.log(data);
    todo.writeData(data).then((result) => {
      console.log(result);
    });
  }).catch((error) => {
    console.log(error);
  });
}
