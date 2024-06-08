const controllerValidation = require('../controllers/validations/validationInputValues');

const validateRegisterProductFields = (req, res, next) => {
  const { body } = req;
  const error = controllerValidation.validateRegisterProduct(body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

module.exports = {
  validateRegisterProductFields, 
};