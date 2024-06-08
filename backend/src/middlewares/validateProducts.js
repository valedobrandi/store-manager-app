const controllerValidation = require('../controllers/validations/validationInputValues');

const validateRegisterProductFields = (req, res, next) => {
  const { body } = req;
  const travelError = controllerValidation.validateRegisterProduct(body);
  if (travelError) return res.status(400).json({ message: travelError.message });
  next();
};

module.exports = {
  validateRegisterProductFields, 
};