const fs = require('fs');


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

module.exports.todo = {
  readData,
  writeData
}