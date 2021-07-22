import React from 'react';

import PropTypes from 'prop-types';

// Import Components:

// Import Assets Files:
import logoSvg from '../../assets/images/logo/logo.svg';
import cartSvg from '../../assets/images/icons/cart.svg';
import favoritesSvg from '../../assets/images/icons/favorite.svg';
import userSvg from '../../assets/images/icons/user.svg';

const Header = ({ totalCount }) => {
  return (
      <section className="header">
        <div className="header__right">
          <a href="/"><img src={logoSvg} alt="logo" className="header__right__logo" /></a>
          <div>
            <a href="/"><h1 className="header__right__title">REACT SNEAKERS</h1></a>
            <div className="header__right__descr">Магазин лучших кроссовок</div>
          </div>
        </div>
        <div className="header__left">
          <div className="header__left__cart-block">
            <a href="!#"><img src={cartSvg} alt="cart" /></a>
            <span>{totalCount} руб.</span>
          </div>
          <a href="/favorites"><img src={favoritesSvg} alt="favorites" className="header__left__favorites" /></a>
          <a href="/orders"><img src={userSvg} alt="user" className="header__left__user" /></a>
        </div>
      </section>
  );
};

Header.propTypes = {
  totalCount: PropTypes.number.isRequired
}

Header.defaultProps = {
  totalCount: 9999
}

export default Header;
