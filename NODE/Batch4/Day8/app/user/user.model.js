const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'batch4';


const client = new MongoClient(url);

let db;
client.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("Connected successfully to db");
  db = client.db(dbName);
  // client.close();
});

const getDb = () => {
  if (db) {
    return db;
  } else {
    client.connect().then((cl) => {
      db = cl.db(dbName);
      return db;
    })
  }
}


module.exports = {
  getDb
}