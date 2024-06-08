const Joi = require('joi');

const registerProduct = Joi.object({
  name: Joi.string().min(5),
});

module.exports = {
  registerProduct,
};