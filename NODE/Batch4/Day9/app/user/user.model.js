const getDb = require('./../../utils/database').getDb;

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  async save() {
    const db = getDb();
    let data = await db.collection('users')
                       .insertOne(this);
    return data;
  }

  static fetchAll(userName) {
    const db = getDb();
    return db.collection('users').find()
              .toArray()
              .then(docs => {
                return docs;
              })
  }
}


module.exports = User;