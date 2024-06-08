const controllerValidation = require('../controllers/validations/validationInputValues');

const validateRegisterSalesFields = (req, res, next) => {
  const { body } = req;
  const error = controllerValidation.validateRegisterSale(body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

module.exports = {
  validateRegisterSalesFields, 
};