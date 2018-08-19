const Schema = require('./../schema.model');
const userSchema = Schema.userSchema;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

userSchema.pre('save', function(next) {
  console.log('save', this );
  const user = this;
  if(user.isModified('password')) {
    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(user.password, salt, function(err, hash) {
        user.password = hash;
        next();
      })
    })
  } else {
    next();
  }
});