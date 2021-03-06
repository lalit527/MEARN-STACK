const userModel = require('./user.model');

const showProfile = (req, res) => {
  userModel.readData('User1', (err, data) => {
    if(err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(data);
    }
  })
}

const addUser = (req, res) => {
  let user = req.body;
  userModel.saveData(user, (err, data) => {
    if(err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(data);
    }
  });
}

module.exports = {
  showProfile,
  addUser
};