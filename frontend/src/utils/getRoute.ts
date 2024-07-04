export default function getRoute(
  fetch: 'all' | 'id' | 'name' | '',
  route: 'sales' | 'products',
  request: 'search' | 'register' | 'update' | 'delete',
  params: {
    name?: string, id?: string, saleItems?: { productId: string; quantity: string; }[] },

) {
  fetch = request !== 'search' ? '' : fetch;
  const ROUTES_OPTIONS = {
    sales: {
      search: {
        all: '/sales',
        id: `/sales/${params.id}`,
      },
      register:
      {
        url: '/sales',
        method: 'POST',
        body: params.saleItems,
      },
      update:
        `/${params.id}/products/${params.id}/quantity`,
      delete:
      {
        url: `/sales/${params.id}`,
        method: 'DELETE',
      },
    },
    products: {
      search: {
        all: '/products',
        id: `/products/${params.id}`,
        name: `/products/search?q=${params.name}`,
      },
      register:
      {
        url: '/products',
        method: 'POST',
        body: { name: params.name },
      },
      update:
      {
        url: `/products/${params.id}`,
        method: 'PUT',
        body: { name: params.name },
      },
      delete:
      {
        url: `/products/${params.id}`,
        method: 'DELETE',
      },
    },
  };

  if (fetch === '') return ROUTES_OPTIONS[route][request];
  return ROUTES_OPTIONS[route][request][fetch];
}
