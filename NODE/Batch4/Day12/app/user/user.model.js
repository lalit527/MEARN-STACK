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
    console.log('cred', email, password);
    user.findOne({email}).then((result) => {
      console.log('success', result);
      if (password === result.password) {
        return resolve(result);
      }
      return reject(`Passord doesnt match for ${result.email}`);
    }).catch((err) => {
      console.log('fails', email);
      return reject('Email Not Found');
    })
  })
}


module.exports = mongoose.model('User', userSchema);