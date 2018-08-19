const Schema = require('./../schema.model');
const userSchema = Schema.userSchema;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwtKey = require('../../config/jwt');
userSchema.methods.foo = function() {
  console.log('foo');
}

userSchema.statics.bar = function() {
  console.log('bar');
}

userSchema.pre('save', function(next) {
  console.log('presaveHook', this );
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



userSchema.methods.generateAuthToken = function() {
  let user = this;
  console.log('Generate', user);
  let access = 'auth';
  let token = jwt.sign({_id: user._id.toHexString(), access}, jwtKey.getToken()).toString();
  user.tokens.push({
    access,
    token
  });
  return user.save().then((success) => token);
}

userSchema.statics.createUser = function(data) {
  const user = this;
  let newUser = new user(data);
  return new Promise((resolve, reject) => {
    newUser.save((err, result) => {
      if(err) {
        reject('some error'+err);
      } else {
        let value = result.generateAuthToken().then((token) => {
          console.log('A value', token);
          resolve({
            result: result,
            token: token
          });
        })
       
      }
    });
  });
}

// console.log(userSchema);

module.exports.userSchema = userSchema;