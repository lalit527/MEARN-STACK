const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tweet = new Schema({
  user: {
    name: String,
    userId: Number
  },
  message: {type: String},
  comments: [
      {
        user: {
          name: {type: String},
          userId: {type: Number}
        },
        message: {
          data: {type: String}
        }
      }
  ]
});

mongoose.model('Tweet', tweet);