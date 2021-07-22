import React from 'react';

import icon from '../../assets/images/empty-cart.png';

const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая <icon>😐</icon>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={icon} alt="Empty cart" />
      <a href="/" className="button button--black">
        <span>Вернуться назад</span>
      </a>
    </div>
  );
};

export default CartEmpty;
