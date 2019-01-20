const userModel = require('./user.model');


const showProfile = (req, res) => {
  userModel.fetchAll().then(docs => {
    res.send(docs);
  });
}

const addUser = async (req, res) => {
  let params = req.body;
  let {userName, email, password} = params;
  let user = new userModel(userName, email, password);
  let data = user.save();
  res.send(data);
}

module.exports = {
  showProfile,
  addUser
};