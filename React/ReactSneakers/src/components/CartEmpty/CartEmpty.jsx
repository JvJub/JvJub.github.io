import React from 'react';

// Import Components:

// Import Assets Files:
import cartEmpty from '../../assets/images/icons/empty.png';
import arrowSvg from '../../assets/images/icons/arrow.svg';


const CartEmpty = () => {
  return (
    <>
      <section className="cart-empty">
        <div className="cart-empty__overlay cart-empty__overlay_active"></div>
        <div className="cart-empty__menu cart-empty__menu_active">

          <div className="cart-empty__menu__title">Корзина</div>

          <div className="cart-empty__menu__block">
            <img src={cartEmpty} alt="empty" />
            <div className="cart-empty__menu__block__text">Корзина пустая</div>
            <div className="cart-empty__menu__block__descr">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</div>

            <div className="cart-empty__menu__block__btn">
            <button>Вернуться назад</button>
            <div className="cart-empty__menu__block__btn__arrow">
              <img src={arrowSvg} alt="arrow" />
            </div>
          </div>
          </div>
          
  

        </div>
      </section>
    </>
  );
};

export default CartEmpty;