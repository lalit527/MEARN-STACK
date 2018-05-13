const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
  fname: {type: String, 
          required: true
          },
  lname: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  mobile: {type: Number, required: false},
  username: {type: Number, required: true, unique: true},
  password: {type: String, required: true, minlength: 6}
});

mongoose.model('User', user);