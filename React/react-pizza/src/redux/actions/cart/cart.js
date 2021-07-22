// Actions:
import {
  ADD_PIZZA_CART,
  CLEAR_CART,
  DECREMENT_PIZZA,
  INCREMENT_PIZZA,
  REMOVE_PIZZA,
} from '../actions';

// Cart Action Creator:
export const addPizzaToCart = (type) => ({
  type: ADD_PIZZA_CART,
  payload: type,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const decrementPizza = (type) => ({
  type: DECREMENT_PIZZA,
  payload: type,
});

export const incrementPizza = (type) => ({
  type: INCREMENT_PIZZA,
  payload: type,
});

export const removePizza = (type) => ({
  type: REMOVE_PIZZA,
  payload: type,
});
