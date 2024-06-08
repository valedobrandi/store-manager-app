const route = require('express').Router();
const productsController = require('../controllers/products.controller');
const validateProductInputs = require('../middlewares/validateProducts');

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
  validateProductInputs.validateRegisterProductFields,
  productsController.register,
);

module.exports = route;