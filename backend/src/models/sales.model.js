const camelize = require('camelize');
const connection = require('./connection');

const searchEverySale = async () => {
  const [sales] = await connection.execute(
    `SELECT sale_id, date, product_id, quantity FROM sales_products
        INNER JOIN sales
            ON sales_products.sale_id = sales.id`,
  );

  return camelize(sales);
};

const searchSaleById = async (saleId) => {
  const [sale] = await connection
    .execute(
      `SELECT date, product_id, quantity FROM sales 
        INNER JOIN sales_products
            ON sales_products.sale_id = sales.id
                WHERE sales.id = ?    
            ORDER BY sale_id, product_id`, 
      [saleId],
    );
  
  return camelize(sale);
};

module.exports = {
  searchEverySale,
  searchSaleById,
};