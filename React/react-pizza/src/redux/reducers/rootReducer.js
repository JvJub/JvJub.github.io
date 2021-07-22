// Root Reducer:
import { combineReducers } from 'redux';

// Reducers:
import filtersReducer from '../reducers/filters/filters';
import pizzaReducer from '../reducers/pizzas/pizzas';
import cartReducer from '../reducers/cart/cart';

export const rootReducer = combineReducers({
  filtersReducer,
  pizzaReducer,
  cartReducer,
});
