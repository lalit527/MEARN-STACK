const fs = require('fs');

const readData = (user, cb) => {
  fs.readFile('User.txt', (err, data) => {
    if(err) {
      cb(err);
    } else {
      let allUsers = data.toString();
      cb('', allUsers);
    }
  });
}

module.exports = {
  readData
}