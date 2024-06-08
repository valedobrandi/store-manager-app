const salesModel = require('../models/sales.model');

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

module.exports = {
  searchEverySale,
  searchSaleById,
};