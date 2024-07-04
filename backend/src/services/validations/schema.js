const Joi = require('joi');

const registerSale = Joi.object({
  quantity: Joi.number().min(1).required(),
  productId: Joi.number().required(),
});

const registerProduct = Joi.object({
  name: Joi.string().min(5),
});

const updateQuantitySaleProduct = Joi.object({
  quantity: Joi.number().min(1),
});

module.exports = {
  registerProduct,
  registerSale,
  updateQuantitySaleProduct,
};