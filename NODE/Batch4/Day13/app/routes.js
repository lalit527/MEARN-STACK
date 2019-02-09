const userRoutes = require('./user/user.router');
const productRouter = require('./product/product.router');
const express = require('express');
const router = express.Router();

userRoutes(router);
productRouter(router);

module.exports = router;