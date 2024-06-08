const Joi = require('joi');

const registerSale = Joi.object({
  quantity: Joi.number().min(1),
  productId: Joi.number(),
});

const registerProduct = Joi.object({
  name: Joi.string().min(5),
});

module.exports = {
  registerProduct,
  registerSale,
};