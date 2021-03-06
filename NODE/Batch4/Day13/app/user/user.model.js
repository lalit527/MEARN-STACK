const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator');

const config = require('./../../config/auth.config');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  name: {
    type: String
  },
  password: {
    type: String
  },
  tokens: [{
    access:{
      type: String,
      required: true
    },
    token:{
      type: String,
      required: true
    }
  }]
});


userSchema.pre('save', function(next) {
  let user = this;
  console.log('bcrypt', user);
  if(user.isModified('password')) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        user.password = hash;
        next();
      })
    })
  } else {
    next();
  }
})

userSchema.statics.findByCredential = function(email, password) {
  const user = this;
  return new Promise((resolve, reject) => {
    console.log('cred', email, password);
    user.findOne({email}).then((result) => {
      console.log('success', result);
      bcrypt.compare(password, result.password, function(err, res) {
          if(err) {
            return reject(`Passord doesnt match for ${result.email}`);
          } 
          resolve(result);
      }); 
      
    }).catch((err) => {
      console.log('fails', email);
      return reject('Email Not Found');
    })
  })
}

userSchema.methods.generateAuthToken = function() {
  let user = this;
  let access = 'auth';
  let token = jwt.sign({_id: user._id.toHexString(), access}, config.JWT).toString();
  user.tokens.push({
    access,
    token
  });
  return new Promise((resolve) => {
    user.save().then(() => {
      resolve(token);
    });
  });
}

userSchema.statics.findByToken = function(token) {
  let user = this;
  let decoded;
  try {
    decoded = jwt.verify(token, config.JWT);
  } 
  catch(e) {
    return Promise.reject(e);
  }

  return user.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
}

module.exports = mongoose.model('User', userSchema);