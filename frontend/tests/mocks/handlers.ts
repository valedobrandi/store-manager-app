import { http, HttpResponse } from 'msw';
import { productsList } from './productsList';
import { salesList } from './salesList';
import { productSearchById } from './searchById';

export const handlers = [
  http.get('http://localhost:3001/sales', () => {
    return HttpResponse.json(salesList);
  }),
  http.get('http://localhost:3001/products/:id', ({ params }) => {
    const { id } = params;
    console.log('PARAMSONE', id);

    return HttpResponse.json(productSearchById);
  }),
  http.get('http://localhost:3001/products', () => {
    return HttpResponse.json(productsList);
  }),
];
