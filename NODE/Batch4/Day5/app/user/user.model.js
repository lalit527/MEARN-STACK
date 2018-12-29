const fs = require('fs');

const readData = (user, cb) => {
  fs.readFile('User.txt', (err, data) => {
    if(err) {
      cb(err);
    } else {
      let allUsers = data.toString().split(/[\n\r]/);
      let foundUser = allUsers.filter((singleUser) => {
        let currentUserDetail = singleUser.split(/[\t' ']/);
        if (currentUserDetail[0] === user) {
          return currentUserDetail;
        }
      });
      console.log(allUsers);
      console.log(foundUser);
      cb('', foundUser); 
    }
  });
}

const saveData = (user, cb) => {
  fs.writeFile('User.txt', user, (err, data) => {
    if(err) {
      cb(err);
    } else {
      cb('', 'Ok');
    }
  })
}

module.exports = {
  readData,
  saveData
}