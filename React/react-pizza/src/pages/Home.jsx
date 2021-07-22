import React, { useCallback, useEffect } from 'react';

// Import React Components:
import { Categories, Sort, PizzaBlock, Loader } from '../components';

// Import Assets Files:

// Redux:
import { useSelector, useDispatch } from 'react-redux';

// Actions:
import { setCategory } from '../redux/actions/filters/filters';
import { setSortBy } from '../redux/actions/filters/filters';
import { fetchPizzas } from '../redux/actions/pizzas/pizzas';
import { addPizzaToCart } from '../redux/actions/cart/cart';

const Home = () => {
  const dispatch = useDispatch();

  // Pizzas:
  const pizzas = useSelector(({ pizzaReducer }) => pizzaReducer.pizzas);
  const isLoaded = useSelector(({ pizzaReducer }) => pizzaReducer.isLoaded);
  const cartItems = useSelector(({ cartReducer }) => cartReducer.items);

  // Filters:
  const { category, sortBy } = useSelector(({ filtersReducer }) => filtersReducer);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [dispatch, category, sortBy]);

  const categoriesItems = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'по цене', type: 'price', order: 'desc' },
    { name: 'по алфавиту', type: 'name', order: 'asc' },
  ];

  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  const onSelectFilter = useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

  const AddPizzaToCart = useCallback(
    (type) => {
      dispatch(addPizzaToCart(type));
    },
    [dispatch],
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoriesItems={categoriesItems}
          onClickItem={onSelectCategory}
          activeCategory={category}
        />
        <Sort sortItems={sortItems} onClickItem={onSelectFilter} activeSortType={sortBy.type} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((items, index) => (
              <PizzaBlock
                {...items}
                key={`${index}_${items.id}`}
                onAddPizzaToCart={AddPizzaToCart}
                cartItems={cartItems[items.id] && cartItems[items.id].items.length}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <Loader key={index + 1} />)}
      </div>
    </div>
  );
};

export default Home;
