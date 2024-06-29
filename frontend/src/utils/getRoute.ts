export default function getRoute(
  fetch: 'all' | 'id' | 'name',
  route: 'sales' | 'products',
  request: 'search' | 'register' | 'update' | 'delete',
  params: string[],
) {
  const ROUTES_OPTIONS = {
    sales: {
      search: {
        all: '/sales',
        id: `/sales/${params[0]}`,
      },
      register:
        '/sales',
      update:
        `/${params[0]}/products/${params[1]}/quantity`,
      delete:
        `/sales/${params[0]}`,
    },
    products: {
      search: {
        all: '/products',
        id: `/products/${params[0]}`,
        name: `/products/search?q=${params[0]}`,
      },
      register:
        '/products',
      update:
        `/products/${params[0]}`,
      delete:
        `/products/${params[0]}`,
    },
  };
  return ROUTES_OPTIONS[route][request][fetch];
}
