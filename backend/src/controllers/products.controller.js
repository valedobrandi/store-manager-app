const productsService = require('../services/products.service');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const findAll = async (req, res) => {
  const { status, data } = await productsService.searchEveryProduct();
  return res.status(mapStatusHTTP(status)).json(data);
};

const findById = async (req, res) => {
  const { productId } = req.params;
  const { status, data } = await productsService.searchProductById(productId);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findAll,
  findById,
};