const userModel = require('./user.model');


const showProfile = (req, res) => {
  userModel.fetchAll().then(result => {
    let [rows, fields] = result;
    console.log(rows);
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