import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import homeReducer from './homeReducer';

export const rootReducer = combineReducers({
  carts: cartReducer,
  robots: homeReducer,
});
