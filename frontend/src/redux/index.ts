import { configureStore } from '@reduxjs/toolkit';
import storeManagerReducer from './reducers/storeManager';

export const store = configureStore({
  reducer: {
    storeManager: storeManagerReducer,
  },
});
