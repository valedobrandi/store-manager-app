import { createSlice } from '@reduxjs/toolkit';

const intialState = {
  storeSearch: {
    route: 'sales',
    request: 'search',
    fetch: '',
    id: '1',
    displayAlert: true,
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
      state.storeSearch.displayAlert = !state.storeSearch.displayAlert;
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
