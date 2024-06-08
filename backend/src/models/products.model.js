const connection = require('./connection');
const format = require('../utils/generateFormattedQuery');

const searchEveryProduct = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );
  return products;
};

const searchProductById = async (productId) => {
  const [[product]] = await connection
    .execute('SELECT * FROM products WHERE id = ?', [productId]);
  return product;
};

const registerProduct = async (newProduct) => {
  const columns = format.getFormattedColumnNames(newProduct);
  const placeholders = format.getFormattedPlaceholders(newProduct);
  const query = `INSERT INTO products (${columns}) VALUE (${placeholders});`;
  
  await connection
    .execute(query, [...Object.values(newProduct)]);

  const [[{ id }]] = await connection.execute('SELECT LAST_INSERT_ID() AS id');

  return { id, ...newProduct };
};

module.exports = {
  searchEveryProduct,
  searchProductById,
  registerProduct,
};
