const express = require('express');
const productsRoutes = require('./routes/products.route');
const saleRoutes = require('./routes/sales.route');

const app = express();
app.use(express.json());
app.use('/products', productsRoutes);
app.use('/sales', saleRoutes);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use((error, _rea, res, _next) => {
  const status = error.status || 500;
  console.log({ message: error.message });
  res.status(status).json({ message: 'Internal Service Error' });
});

module.exports = app;
