import React, { useCallback } from 'react';

// Import React Components:
import { CartHeader, CartItem, CartBottom, CartEmpty } from '../components';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Actions:
import { clearCart, removePizza, incrementPizza, decrementPizza } from '../redux/actions/cart/cart';

// Import Assets Files:

const Cart = () => {
  const dispatch = useDispatch();

  // Cart
  const { items, totalPrice, totalCount } = useSelector(({ cartReducer }) => cartReducer);

  // Pizza Items:
  const allItems = Object.keys(items).map((item) => {
    return items[item].items[0];
  });

  const handleClearCart = useCallback(() => {
    const message = window.confirm('Вы действительно хотите очистить корзину?', '');

    if (message === true) {
      dispatch(clearCart());
    }
  }, [dispatch]);

  const increasePizza = useCallback(
    (id) => {
      dispatch(incrementPizza(id));
    },
    [dispatch],
  );

  const downsizePizza = useCallback(
    (id) => {
      dispatch(decrementPizza(id));
    },
    [dispatch],
  );

  const deletePizza = useCallback(
    (id) => {
      const message = window.confirm('Вы действительно хотите удалить пиццу?');

      if (message === true) {
        dispatch(removePizza(id));
      }
    },
    [dispatch],
  );

  return (
    <div className="container">
      <div className="content content__cart">
        <div className="container container--cart">
          {allItems.length === 0 ? (
            <CartEmpty />
          ) : (
            <div className="cart">
              <CartHeader handleClearCart={handleClearCart} />
              <div className="content__items">
                {allItems.map((item, index) => (
                  <CartItem
                    {...item}
                    key={`${item.name}_${index}`}
                    totalPrice={items[item.id].totalPrice}
                    totalCount={items[item.id].items.length}
                    increasePizza={increasePizza}
                    downsizePizza={downsizePizza}
                    deletePizza={deletePizza}
                  />
                ))}
              </div>
              <div className="cart__bottom">
                <CartBottom totalPrice={totalPrice} totalCount={totalCount} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
