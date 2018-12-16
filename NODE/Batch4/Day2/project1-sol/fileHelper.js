const fs = require('fs');

//  Method 1: Callback
// let readFileData = (filename, cb) => {
//   fs.readFile(filename, (err, result) => {
//     if (err) {
//       cb(err);
//       return;
//     } else {
//       cb('', result.toString());
//     }
//   });
// };

// Method2 : Promises
// let readFileData = (filename, cb) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, (err, result) => {
//       if (err) {
//         reject(err);
//         return;
//       } else {
//         resolve(result.toString());
//       }
//     });
//   });
  
// };

// Method3 : Asyn-Await
// let readFileData = async (filename) => {
//     let data = await (function() { 
//       return new Promise((resolve, reject) => {
//         fs.readFile(filename, (err, result) => {
//           if (err) {
//             reject(err);
//             return;
//           } else {
//             resolve(result.toString());
//           }
//         });
//       }); 
//     })().then((data) => {
//       return data;
//     });
// };


// Method4 : Generators
let readFileData = (gen) => {
  let g = gen();
  let filename = g.next().value;
  fs.readFile(filename, (err, result) => {
    if (err) {
      return g.throw(err);
    } else {
      g.next(result.toString());
    }
  });
};

let writeFileData = (filename, data) => {
  fs.writeFile(filename, data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
};

module.exports = {
  readFileData,
  writeFileData
}