// Actions:
import { SET_SORT_BY, SET_CATEGORY } from '../actions';

// Action Creators:

export const setSortBy = (type) => {
  return {
    type: SET_SORT_BY,
    payload: type,
  };
};

export const setCategory = (type) => {
  return {
    type: SET_CATEGORY,
    payload: type,
  };
};
