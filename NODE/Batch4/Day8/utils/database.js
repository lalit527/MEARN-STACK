const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/batch4';


// const client = new MongoClient(url, { useNewUrlParser: true } );

let _db;

// const mongoConnect = cb => {
//   MongoClient.connect(client).then(cl => {
//     _db = client.db(dbName);
//     cb();
//   }).catch(err => {
//     console.log(err);
//     throw err;
//   })
// }
const mongoConnect = cb => {
  const mongo = MongoClient.connect(url, { useNewUrlParser: true });
  mongo.then((client) => {
    console.log("Connected successfully to server");
    _db = client.db();
    cb();
  }).catch((err) => {
    console.log('err', err);
  });
}

const getDb = () => {
  if (_db) {
    return _db;
  } else {
    throw 'Not Connected to DB';
  }
}


exports.getDb = getDb;
exports.mongoConnect = mongoConnect;