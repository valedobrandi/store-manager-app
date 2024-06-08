const route = require('express').Router();
const productsController = require('../controllers/products.controller');
const middlewares = require('../middlewares/validateProducts');

route.get(
  '',
  productsController.findAll,
);

route.get(
  '/:productId',
  productsController.findById,
);

route.post(
  '',
  middlewares.validateRegisterProductFields,
  productsController.register,
);

module.exports = route;