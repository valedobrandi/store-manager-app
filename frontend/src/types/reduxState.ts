export type ReduxState = {
  isFetching: boolean,
  errorMessage: string,
};

export type InitialStateType = {
  storeManager:{
    storeSearch: {
      route: 'sales' | 'products';
      request: 'search' | 'register' | 'update' | 'delete'; }
  } };
