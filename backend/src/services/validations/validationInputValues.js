const schema = require('./schema');

const validateRegisterProduct = (keysObjectToValidate) => {
  const { error } = schema.registerProduct.validate(keysObjectToValidate);
  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

module.exports = {
  validateRegisterProduct,
};