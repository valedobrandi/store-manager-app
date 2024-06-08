const productsModel = require('../models/products.model');

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

module.exports = {
  searchEveryProduct,
  searchProductById,
};