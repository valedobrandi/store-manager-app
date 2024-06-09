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

module.exports = {
  findAll,
  findById,
  register,
};