import React from 'react';

import PropTypes from 'prop-types';

// Import Components:

// Import Assets Files:
import cartOrderedPng from '../../assets/images/icons/ordered.png';
import arrowSvg from '../../assets/images/icons/arrow.svg';


const CartOrdered = ({ orderNum }) => {
  return (
    <>
      <section className="cart-ordered">
        <div className="cart-ordered__overlay cart-ordered__overlay_active"></div>
        <div className="cart-ordered__menu cart-ordered__menu_active">

          <div className="cart-ordered__menu__title">Корзина</div>

          <div className="cart-ordered__menu__block">
            <img src={cartOrderedPng} alt="ordered" class="cart-ordered__menu__block__image" />
            <div className="cart-ordered__menu__block__text">Заказ оформлен!</div>
            <div className="cart-ordered__menu__block__descr">Ваш заказ #18 скоро будет передан курьерской доставке.</div>

            <div className="cart-ordered__menu__block__btn">
            <button>Вернуться назад</button>
            <div className="cart-ordered__menu__block__btn__arrow">
              <img src={arrowSvg} alt="arrow" />
            </div>
          </div>
          </div>
          
  

        </div>
      </section>
    </>
  );
};

CartOrdered.propTypes = {
  orderNum: PropTypes.number
}

CartOrdered.defaultProps = {
  orderNum: 0
}

export default CartOrdered;