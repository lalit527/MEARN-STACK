const userRoutes = require('./user/user.router')();

const routes = (req, res, next) => {
  userRoutes
};

module.exports = routes;