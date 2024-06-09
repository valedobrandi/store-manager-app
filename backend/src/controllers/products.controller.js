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

const register = async (req, res) => {
  const { status, data } = await productsService.registerProduct(req.body);
  return res.status(mapStatusHTTP(status)).json(data);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const { status, data } = await productsService.updateProduct(body, id);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findAll,
  findById,
  register,
  update,
};