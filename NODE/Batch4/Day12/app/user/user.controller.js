const userModel = require('./user.model');


const showProfile = (req, res) => {
  userModel.find({}).then(result => {
    console.log(result);
    res.render('users/users', {users: result});
  })
  .catch(err => {
    res.send(err);
  });
}

const getSignup = async (req, res) => {
  res.render('users/signup');
}

const getLoginUser = async (req, res) => {
  res.render('users/login');
}

const addUser = async (req, res) => {
  let params = req.body;
  let {name, email, password} = params;
  let user = new userModel({name, email, password});
  console.log(userModel);
  user.save()
      .then(result => {
        res.redirect('/api/v1/products');
      })
      .catch(err => {
        console.log(err);
        res.send(err);
      });
}

const loginUser = async(req, res) => {
  let params = req.body;
  let {email, password} = params;
  userModel.findByCredential(email, password).then((result) => {
    console.log('Controller Success', result);
    // res.cookie('Test');
    res.redirect('/api/v1/products');
  }).catch((err) => {
    console.log('Controller Error', err);
    res.render('users/login', {error: err})
  })
}

const showUserDetail = (req, res) => {
  let id = req.params['id'];
  userModel.findOne({ '_id': id }).then(result => {
    console.log(result);
    res.render('users/user', {user: result});
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
  updateUserDetail,
  getSignup,
  getLoginUser,
  loginUser
};