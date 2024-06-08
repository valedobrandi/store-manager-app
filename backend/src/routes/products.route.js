const route = require('express').Router();
const productsController = require('../controllers/products.controller');

route.get(
  '',
  productsController.findAll,
);

route.get(
  '/:productId',
  productsController.findById,
);

module.exports = route;