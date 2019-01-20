const userRoutes = require('./user/user.router');
const express = require('express');
const router = express.Router();

userRoutes(router);

module.exports = router;