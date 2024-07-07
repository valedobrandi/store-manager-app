import { createSlice } from '@reduxjs/toolkit';

const intialState = {
  storeSearch: {
    route: 'products',
    request: 'search',
    fetch: '',
    id: '1',
    isAlert: false,
  },
  registerSaleItemnsList: {
    itemsList: [] as { productId: string; quantity: string; }[],
    saleItem: { productId: '', quantity: '' },
  },
};

const storeManagerSlice = createSlice({
  name: 'storeManager',
  initialState: intialState,
  reducers: {
    selectRoute: (state, action) => {
      state.storeSearch.route = action.payload.route;
    },
    selectRequest: (state, action) => {
      state.storeSearch.request = action.payload.request;
    },
    selectFetch: (state, action) => {
      state.storeSearch.fetch = action.payload.fetch;
    },
    selectId: (state, action) => {
      state.storeSearch.id = action.payload.id;
    },
    displayAlert: (state, action) => {
      state.storeSearch.isAlert = action.payload.isAlert;
    },
    addItem: (state) => {
      const { saleItem } = state.registerSaleItemnsList;
      let { itemsList } = state.registerSaleItemnsList;
      const findItem = itemsList.find((item) => item.productId === saleItem.productId);
      if (!findItem) itemsList.push(saleItem);
      if (findItem) {
        /*        const addQuantity = { ...saleItem,
          quantity: saleItem.quantity + findItem.quantity }; */
        itemsList = itemsList.map((item) => {
          if (item.productId === findItem.productId) {
            return { ...saleItem,
              quantity: saleItem.quantity + findItem.quantity };
          }
          return item;
        });
      }
      itemsList.push(saleItem);
    },
    CLEAR_SALE_LIST: (state) => {
      state.registerSaleItemnsList.itemsList = [];
    },
    newSale: (state, action) => {
      const saleItem = {
        ...state.registerSaleItemnsList.saleItem,
        [action.payload.name]: action.payload.value,
      };
      state.registerSaleItemnsList.saleItem = saleItem;
    },
  },
});

export const {
  selectRoute,
  selectRequest,
  selectFetch,
  selectId,
  displayAlert,
  addItem,
  newSale,
  CLEAR_SALE_LIST,
} = storeManagerSlice.actions;
export default storeManagerSlice.reducer;
