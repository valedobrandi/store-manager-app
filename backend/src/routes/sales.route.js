const route = require('express').Router();
const salesController = require('../controllers/sales.controller');

route.get(
  '',
  salesController.findAll,
);

route.get(
  '/:saleId',
  salesController.findById,
);

module.exports = route;