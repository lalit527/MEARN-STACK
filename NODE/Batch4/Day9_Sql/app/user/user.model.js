const db = require('./../../utils/database');

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  async save() {
    return db.execute('INSERT INTO users (email, name, password) VALUES (?, ?, ?)',
                [this.name, this.email, this.password]);
  }

  static fetchAll(userName) {
    return db.execute('SELECT * FROM users');
  }
}


module.exports = User;