const connection = require('./connection');

const searchEveryProduct = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );
  return products;
};

const searchProductById = async (productId) => {
  const [[products]] = await connection
    .execute('SELECT * FROM products WHERE id = ?', [productId]);
  return products;
};

module.exports = {
  searchEveryProduct,
  searchProductById,
};
