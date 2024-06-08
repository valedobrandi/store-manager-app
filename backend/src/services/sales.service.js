const salesModel = require('../models/sales.model');
const productsModel = require('../models/products.model');
const serviceValidate = require('./validations/validationInputValues');

const searchEverySale = async () => {
  const sales = await salesModel.searchEverySale();

  return { status: 'SUCCESSFUL', data: sales };
};

const searchSaleById = async (saleId) => {
  const sale = await salesModel.searchSaleById(saleId);

  if (sale.length < 1) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }
  
  return { status: 'SUCCESSFUL', data: sale };
};

const register = async (newSale) => {
  const error = serviceValidate.validateRegisterSales(newSale);
  console.log(error);
  if (error) {
    return { status: error.status, data: { message: error.message } };
  }

  const productList = await productsModel.searchEveryProduct();
  const findProductById = newSale.map((newProduct) => productList
    .find((DBproduct) => newProduct.productId === DBproduct.id));

  if (findProductById.includes(undefined)) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  const registerNewSale = await salesModel.registerSales(newSale);

  return { status: 'CREATED', data: registerNewSale };
};

module.exports = {
  searchEverySale,
  searchSaleById,
  register,
};