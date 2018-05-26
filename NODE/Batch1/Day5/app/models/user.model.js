const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
  fname: {type: String, 
          required: true
          },
  lname: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  mobile: {type: Number, required: false},
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true, minlength: 6},
  token: [{
    access: {
        type: String,
        required: true
    },
    token:{
        type: String,
        required: true
    }
  }]
});



user.statics.findByCredential = function(email, password) {
  const user = this;
  return new Promise((resolve, reject) => {
    user.findOne({email}).then((result) => {
      if(!result) {
        return reject();
      }
      if (password === result.password){
        return resolve(result);
      } else {
        return reject('password doesn\'t match');
      }
    });
  });
};

user.statics.createUser = function(data) {
  const user = this;
  let newUser = new user(data);
  return new Promise((resolve, reject) => {
    newUser.save((err, result) => {
      if(err) {
        reject('some error'+err);
      } else {
        resolve('/tweet/v1/all');
      }
    });
  });
}

mongoose.model('User', user);