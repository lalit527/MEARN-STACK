const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/batch4';

let _db;

const mongoConnect = cb => {
  const mongo = MongoClient.connect(url, { useNewUrlParser: true });
  mongo.then(client => {
    console.log('Connected to db');
    _db = client.db();
    cb();
  }).catch(err => {
    console.log('Error: ', err);
    throw err;
  });
}

const getDb = () => {
  if (_db) {
    return _db;
  } else {
    throw 'Database Not Connected';
  }
}

module.exports = {
  mongoConnect,
  getDb
}