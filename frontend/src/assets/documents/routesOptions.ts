/* eslint-disable sonarjs/no-duplicate-string */
const ROUTES_OPTIONS = {
  sales: {
    get: [
      '/sales/:saleId',
      '/sales/:id',
    ],
    post: [
      '/sales',
    ],
    delete: [
      '/sales',
    ],
    put: [
      '/:saleId/products/:productId/quantity',
    ],
  },
  products: {
    get: [
      '/products',
      '/products/search',
      '/products/:productId',
    ],
    post: [
      '/products',
    ],
    delete: [
      '/products/:productId',
    ],
    put: [
      '/products/:productId',
    ],
  },
};

export default ROUTES_OPTIONS;
