// Actions:
import { SET_SORT_BY, SET_CATEGORY } from '../../actions/actions';

// Filters Reducer:
const initialState = {
  category: 0,
  sortBy: {
    type: 'popular',
    order: 'desc',
  },
};

export default function filters(state = initialState, action) {
  switch (action.type) {
    case SET_SORT_BY: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    case SET_CATEGORY: {
      return {
        ...state,
        category: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
