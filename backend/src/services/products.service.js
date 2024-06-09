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

const updateProduct = async (update, id) => {
  const error = serviceValidate.validateRegisterProduct(update);
  if (error) {
    return { status: error.status, data: { message: error.message } };
  }
  
  const product = await productsModel.searchProductById(id);

  if (!product) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }

  const productUpdate = await productsModel.updateProduct(update, id);

  return { status: 'SUCCESSFUL', data: productUpdate };
};

module.exports = {
  searchEveryProduct,
  searchProductById,
  registerProduct,
  updateProduct,
};