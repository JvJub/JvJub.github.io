// Import API:
import Pizza from '../../../services/Pizza';

// Actions:
import { SET_PIZZAS, SET_LOADED } from '../actions';

// Actions Creators:

export const setLoaded = (type) => ({
  type: SET_LOADED,
  payload: type,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));

  // Services:
  const pizzaAPI = new Pizza();

  // Fetch Pizzas:
  pizzaAPI.getPizzas(dispatch, setPizzas, sortBy, category);
};

export default function setPizzas(type) {
  return {
    type: SET_PIZZAS,
    payload: type,
  };
}
