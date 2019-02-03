const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String
  },
  password: {
    type: String
  }
});

userSchema.statics.findByCredential = function(email, password) {
  const user = this;
  return new Promise((resolve, reject) => {
    user.findOne({email}).then((result) => {
      if (password === result.password) {
        return resolve(result);
      }
      return reject(`Passord doesnt match for ${result.email}`);
    }).catch((err) => {
      return reject('Email Not Found');
    })
  })
}


module.exports = mongoose.model('User', userSchema);