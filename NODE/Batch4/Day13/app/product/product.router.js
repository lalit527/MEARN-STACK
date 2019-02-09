// const express = require('express');
const productController = require('./product.controller');
const path = require('path');
const auth = require('./../../middleware/auth.user');

const routes = (router) => {
  router.get('/products', auth.verifyAuthToken, (req, res) => {
    productController.showAllProducts(req, res);
  });

  router.get('/product/detail/:id', auth.verifyAuthToken, (req, res) => {
    productController.showProductDetail(req, res);
  });
  

  router.post('/product/update/:id', auth.verifyAuthToken, (req, res) => {
    productController.updateProductDetail(req, res);
  });

  router.post('/product/add', auth.verifyAuthToken, (req, res) => {
    productController.addProduct(req, res);
  });

  router.get('/product/add', auth.verifyAuthToken, (req, res) => {
    productController.getAddProduct(req, res);
  });
};

module.exports = routes;