import React from 'react';

// Import Components:

// Import Assets Files:
import item2Png from '../../assets/images/items/item2.png';
import item10Png from '../../assets/images/items/item10.png';

import plusSvg from '../../assets/images/icons/plus.svg';
import arrowSvg from '../../assets/images/icons/arrow.svg';

const Cart = () => {
  return (
    <>
      <section className="cart">
        <div className="cart__overlay cart__overlay_active"></div>
        <div className="cart__menu cart__menu_active">
          <div className="cart__menu__title">Корзина</div>

          <div className="cart__menu__item-wrapper">
            <div className="cart__menu__item-wrapper__item">
              <img src={item2Png} alt="item" className="cart__menu__item-wrapper__item__img" />
              <div className="cart__menu__item-wrapper__item__descr">
                <div className="cart__menu__item-wrapper__item__descr__text">
                  Мужские Кроссовки Nike Air Max 270
                </div>
                <div className="cart__menu__item-wrapper__item__descr__price">
                  12 999 руб.
                </div>
              </div>
              <div className="cart__menu__item-wrapper__item__remove">
                <img src={plusSvg} alt="plus" />
              </div>
            </div>
            <div className="cart__menu__item-wrapper__item">
              <img src={item10Png} alt="item" className="cart__menu__item-wrapper__item__img" />
              <div className="cart__menu__item-wrapper__item__descr">
                <div className="cart__menu__item-wrapper__item__descr__text">
                  Мужские Кроссовки Nike Air Max 270
                </div>
                <div className="cart__menu__item-wrapper__item__descr__price">
                  8 499 руб.
                </div>
              </div>
              <div className="cart__menu__item-wrapper__item__remove">
                <img src={plusSvg} alt="plus" />
              </div>
            </div>
          </div>


            <div className="cart__menu__total">
            <div className="cart__menu__total__text">Итого:</div>
            <div className="cart__menu__total__price">21 498 руб.</div>
          </div>

          <div className="cart__menu__tax">
            <div className="cart__menu__tax__text">Налог 5%:</div>
            <div className="cart__menu__tax__price">1074 руб.</div>
          </div>

          <div className="cart__menu__btn">
            <button>Оформить заказ</button>
            <div className="cart__menu__btn__arrow">
              <img src={arrowSvg} alt="arrow" />
            </div>
          </div>



        </div>
      </section>
    </>
  );
};

export default Cart;