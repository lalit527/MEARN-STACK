const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/batch4';



const mongoConnect = cb => {
  const mongo = mongoose.connect(url, { useNewUrlParser: true });
  mongo.then(client => {
    console.log('Connected to db');
    cb();
  }).catch(err => {
    console.log('Error: ', err);
    throw err;
  });
}


module.exports = mongoConnect
