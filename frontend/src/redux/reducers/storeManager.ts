import { createSlice } from '@reduxjs/toolkit';

const storeManagerSlice = createSlice({
  name: 'storeManager',
  initialState: {
    route: 'sales',
  },
  reducers: {
    selectRoute: (state, action) => {
      state.route = action.payload.route;
    },
  },
});

export const { selectRoute } = storeManagerSlice.actions;
export default storeManagerSlice.reducer;
