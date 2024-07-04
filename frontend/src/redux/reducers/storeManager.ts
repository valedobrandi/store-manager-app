import { createSlice } from '@reduxjs/toolkit';

const intialState = {
  storeSearch: {
    route: 'products',
    request: 'search',
    fetch: '',
    id: '1',
    isAlert: false,
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
  },
});

export const {
  selectRoute,
  selectRequest,
  selectFetch,
  selectId,
  displayAlert,
} = storeManagerSlice.actions;
export default storeManagerSlice.reducer;
