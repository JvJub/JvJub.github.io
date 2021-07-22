// Imports:
import axios from 'axios';

// Pizza Service
export default class Pizza {
  async getPizzas(dispatch, reduxAction, sortBy, category) {
    const result = await axios
      .get(
        `http://localhost:3001/pizzas?${
          category > 0 ? `category=${category}` : ``
        }&_sort=${sortBy}&_order=desc`,
      )
      .then(({ data }) => dispatch(reduxAction(data)));

    return await result;
  }
}
