const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodebatch4', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;