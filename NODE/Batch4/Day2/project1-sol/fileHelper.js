const fs = require('fs');

let readFileData = (filename) => {
  fs.readFile(filename, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result.toString());
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