const db = require('./../../utils/database');

class User{
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  save() {
    return db.execute(
      'INSERT INTO users (email, name, password) VALUES (?, ?, ?)',
      [this.email, this.name, this.password]
    )
  }

  update(newPassword) {
    return db.execute(
      `Update users SET password = (?) WHERE email = ${this.email}`,
      [newPassword]
    )
  }

  static findOne(email) {
    return db.execute(`SELECT * FROM users WHERE email = ${email}`);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM users');
  }
}

module.exports = User;