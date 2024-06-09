const salesService = require('../services/sales.service');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const findAll = async (req, res) => {
  const { status, data } = await salesService.searchEverySale();
  return res.status(mapStatusHTTP(status)).json(data);
};

const findById = async (req, res) => {
  console.log('aqui');
  const { saleId } = req.params;
  const { status, data } = await salesService.searchSaleById(saleId);
  return res.status(mapStatusHTTP(status)).json(data);
};

const register = async (req, res) => {
  const { body } = req;
  const { status, data } = await salesService.register(body);
  return res.status(mapStatusHTTP(status)).json(data);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesService.deleteSale(id);
  
  return res.status(mapStatusHTTP(status)).json(data);
};

const update = async (req, res) => {
  const { saleId, productId } = req.params;
  const { body } = req;
  const { status, data } = await salesService.updateProductSaleQuantity(saleId, productId, body);
  
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findAll,
  findById,
  register,
  remove,
  update,
};