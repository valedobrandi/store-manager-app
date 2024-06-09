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

const updateProduct = async (update, productId) => {
  await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?', 
    [update.name, productId],
  );

  return { id: Number(productId), name: update.name };
};

module.exports = {
  searchEveryProduct,
  searchProductById,
  registerProduct,
  updateProduct,
};
