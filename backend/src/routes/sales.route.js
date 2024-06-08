const route = require('express').Router();
const salesController = require('../controllers/sales.controller');
const middlewares = require('../middlewares/validateSales');

route.get(
  '',
  salesController.findAll,
);

route.get(
  '/:saleId',
  salesController.findById,
);

route.post(
  '',
  middlewares.validateRegisterSalesFields,
  salesController.register,
);

module.exports = route;