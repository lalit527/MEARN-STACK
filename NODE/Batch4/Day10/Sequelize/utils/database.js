const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodebatch4', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;