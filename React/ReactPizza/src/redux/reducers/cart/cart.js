// Actions
import {
  ADD_PIZZA_CART,
  CLEAR_CART,
  DECREMENT_PIZZA,
  INCREMENT_PIZZA,
  REMOVE_PIZZA,
} from '../../actions/actions';

// Cart Reducer:
const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (array) => {
  const result = array.reduce((sum, obj) => obj.price + sum, 0);

  return result;
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newObject = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const items = Object.values(newObject).map((obj, index) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newObject,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }
    case CLEAR_CART: {
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };
    }
    case DECREMENT_PIZZA: {
      const oldItems = state.items[action.payload].items;

      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;

      return {
        ...state,
        items: newItems,
        totalPrice: currentTotalPrice,
        totalCount: currentTotalCount,
      };
    }
    case INCREMENT_PIZZA: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const currentTotalPrice = state.totalPrice + newItems[action.payload].totalPrice;
      const currentTotalCount = state.totalCount + newItems[action.payload].items.length;

      return {
        ...state,
        items: newItems,
        totalPrice: currentTotalPrice,
        totalCount: currentTotalCount,
      };
    }
    case REMOVE_PIZZA: {
      const newItems = {
        ...state.items,
      };

      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }
    default: {
      return state;
    }
  }
};

export default cart;
