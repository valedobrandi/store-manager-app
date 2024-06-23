import { combineReducers } from 'redux';
import storeManagerReducer from './storeManagerReducer';

const rootReducer = combineReducers({ storeManagerReducer });

export default rootReducer;
