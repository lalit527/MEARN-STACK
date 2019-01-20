const userModel = require('./user.model');


const showProfile = (req, res) => {
  userModel.findAll().then(result => {
    let [rows, fields] = result;
    console.log(result);
    res.send(rows);
  })
  .catch(err => {
    res.send(err);
  });
}

const addUser = async (req, res) => {
  let params = req.body;
  let {userName, email, password} = params;
  let user = new userModel(userName, email, password);
  userModel.create({
    name: userName, 
    email, 
    password
  }).then(result => {
    console.log(result);
    res.send(result);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
}

module.exports = {
  showProfile,
  addUser
};