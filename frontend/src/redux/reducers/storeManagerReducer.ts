import { createSlice, configureStore } from '@reduxjs/toolkit';

import { InitialStateType } from '../../types/reduxState';
import { SELECT_ROUTE } from '../actions';

type ActionType = {
  type: string,
  payload:{
    route: string
  }
};

const INITIAL_STATE: InitialStateType = {
  route: 'sales',
};

const storeManagerReducer = (state = INITIAL_STATE, action: ActionType | any) => {
  switch (action.type) {
    case SELECT_ROUTE:
      return { route: action.payload.route };
    default:
      return state;
  }
};

export default storeManagerReducer;
