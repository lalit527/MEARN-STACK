const fs = require('fs');
const readline = require('readline');

let readData = function() {
  let promise = new Promise((resolve, reject) => {
    fs.readFile('task.txt', (err, data) => {
      if(err) {
        console.log(err);
        reject(err);
      }
      resolve(data.toString());
    })
  });
  return promise;
}

let writeData = function(data) {
  let promise = new Promise((resolve, reject) => {
    fs.writeFile('task.txt', data, (err) => {
      if(err) {
        console.log(err);
        reject(err);
      }
      resolve('done');
    });
  });
  return promise;
}

let deleteData = function(data) {
  let promise = new Promise((resolve, reject) => {
    fs.truncate('task.txt', 0, (err) => {
      if(err) {
        console.log(err);
        reject(err);
      }
      resolve('done');
    });
  });
  return promise;
}

let readOne = function() {
  const rl = readline.createInterface({
      input: fs.createReadStream('task.txt')
  });
  let promise = new Promise((resolve, reject) => {
    rl.on('line', function (line) {
        console.log('Line from file:', line);
        
    });
    rl.on('close', () => {
      resolve('done');
    })
  });
  return promise;
}

let _readOne = function() {
  const rl = readline.createInterface({
      input: fs.createReadStream('task.txt')
  });
  let promise = new Promise((resolve, reject) => {
    let result = [];
    rl.on('line', function (line) {
        console.log('Line from file:', line);
        // result.append(line);
        result.push(line);
    });
    rl.on('close', () => {
      resolve(result);
    })
  });
  return promise;
}

let deleteOne = function(line) {
  let promise = new Promise((resolve, reject) => {
    _readOne().then((result) => {
      console.log(result);
      resolve('done');
    });
    // fs.readFile('task.txt', (err, data) => {
    //   if(err) {
    //     console.log(err);
    //     reject(err);
    //   }
    //   resolve(data.toString().split('\n').slice(line, 1).join('\n'));
    // })
  });
  return promise;
}

module.exports.todo = {
  readData,
  writeData,
  deleteData,
  readOne,
  deleteOne
}