const productsModel = require('../models/products.model');
const serviceValidate = require('./validations/validationInputValues');

const searchEveryProduct = async () => {
  const products = await productsModel.searchEveryProduct();

  return { status: 'SUCCESSFUL', data: products };
};

const searchProductById = async (productId) => {
  const product = await productsModel.searchProductById(productId);

  if (!product) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  
  return { status: 'SUCCESSFUL', data: product };
};

const registerProduct = async (newProduct) => {
  const error = serviceValidate.validateRegisterProduct(newProduct);
  if (error) {
    return { status: error.status, data: { message: error.message } };
  }

  const register = await productsModel.registerProduct(newProduct);
  return { status: 'CREATED', data: register };
};

module.exports = {
  searchEveryProduct,
  searchProductById,
  registerProduct,
};