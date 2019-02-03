// const express = require('express');
const productController = require('./product.controller');
const path = require('path');


const routes = (router) => {
  router.get('/products', (req, res) => {
    productController.showAllProducts(req, res);
  });

  router.get('/product/detail/:id', (req, res) => {
    productController.showProductDetail(req, res);
  });
  

  router.post('/product/update/:id', (req, res) => {
    productController.updateProductDetail(req, res);
  });

  router.post('/product/add', (req, res) => {
    productController.addProduct(req, res);
  });

  router.get('/product/add', (req, res) => {
    productController.getAddProduct(req, res);
  });
};

module.exports = routes;