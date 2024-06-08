const salesService = require('../services/sales.service');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const findAll = async (req, res) => {
  const { status, data } = await salesService.searchEverySale();
  return res.status(mapStatusHTTP(status)).json(data);
};

const findById = async (req, res) => {
  const { saleId } = req.params;
  const { status, data } = await salesService.searchSaleById(saleId);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findAll,
  findById,
};