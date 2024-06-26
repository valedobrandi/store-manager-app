import { createSlice } from '@reduxjs/toolkit';

const intialState = {
  storeSearch: {
    route: 'sales',
    request: 'search',
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
  },
});

export const { selectRoute, selectRequest } = storeManagerSlice.actions;
export default storeManagerSlice.reducer;
