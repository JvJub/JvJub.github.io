// Actions:
import { SET_PIZZAS, SET_LOADED } from '../../actions/actions';

// Pizza Reducer:
const initialState = {
  pizzas: [],
  isLoaded: false,
};

export default function pizzas(state = initialState, action) {
  switch (action.type) {
    case SET_PIZZAS: {
      return {
        ...state,
        pizzas: action.payload,
        isLoaded: true,
      };
    }
    case SET_LOADED: {
      return {
        ...state,
        isLoaded: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
