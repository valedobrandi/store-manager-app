const Joi = require('joi');

const registerProduct = Joi.object({
  name: Joi.required(),
});

module.exports = {
  registerProduct,
};