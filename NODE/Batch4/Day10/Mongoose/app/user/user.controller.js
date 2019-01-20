const userModel = require('./user.model');


const showProfile = (req, res) => {
  userModel.fetchAll().then(result => {
    console.log(result);
    res.send(result);
  })
  .catch(err => {
    res.send(err);
  });
}

const addUser = async (req, res) => {
  let params = req.body;
  let {userName: name, email, password} = params;
  let user = new userModel({name, email, password});
  console.log(userModel);
  user.save()
      .then(result => {
        console.log(result);
        res.send('ok');
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