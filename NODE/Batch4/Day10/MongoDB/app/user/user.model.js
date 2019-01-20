const getDb = require('./../../utils/database').getDb;

class User {

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  save() {
    const db = getDb();
    let data = db.collection('users').insertOne(this);
    return data;
  }

  update(newPassword) {
    
  }

  static findOne(email) {
    
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('users').find({})
                .toArray()
                .then(docs => {
                  return docs;
                })
  }
}

module.exports = User;