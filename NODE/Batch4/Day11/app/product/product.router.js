// const express = require('express');
const productController = require('./product.controller');
const path = require('path');


const routes = (router) => {
  router.get('/products', (req, res) => {
    productController.showAllProducts(req, res);
  });

  router.get('/product/:id', (req, res) => {
    userController.showProductDetail(req, res);
  });

  router.post('/product/update/:id', (req, res) => {
    userController.updateProductDetail(req, res);
  });

  router.post('/signup', (req, res) => {
    userController.addProduct(req, res);
  });
};

module.exports = routes;