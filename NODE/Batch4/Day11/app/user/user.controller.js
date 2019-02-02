const userModel = require('./user.model');


const showProfile = (req, res) => {
  userModel.find({}).then(result => {
    console.log(result);
    res.render('users', {users: result});
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

const showUserDetail = (req, res) => {
  let id = req.params['id'];
  userModel.findOne({ '_id': id }).then(result => {
    console.log(result);
    res.render('user', {user: result});
  })
  .catch(err => {
    res.send(err);
  });
}

const updateUserDetail = (req, res) => {
  let id = req.params['id'];
  let body = req.body;
  userModel.findOneAndUpdate({ '_id': id }, { $set: { body } }).then(result => {
    console.log(result);
    res.redirect('/api/v1/users');
  })
  .catch(err => {
    res.send(err);
  });
}

module.exports = {
  showProfile,
  addUser,
  showUserDetail,
  updateUserDetail
};