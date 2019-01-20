const mongoose = require('mongoose');
const dbpath = "mongodb://localhost:27017/batch4";


const mongoConnect = cb => {
  const mongo = mongoose.connect(dbpath, {useNewUrlParser: true });
  mongo.then(() => {
    console.log('connected');
    cb();
  }).catch((err) => {
    console.log('err', err);
    throw err;
  });

};

module.exports = {
  mongoConnect
}