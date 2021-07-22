import React from 'react';

import { Link, Route } from 'react-router-dom';

// Import React Components:
import { Button } from '../../components';

// Import Assets Files:
import logoSvg from '../../assets/images/pizza-logo.svg';

// Redux
import { useSelector } from 'react-redux';

const Header = () => {
  const { totalPrice, totalCount } = useSelector(({ cartReducer }) => cartReducer);

  const buttonHandler = () => {
    alert('Click');
  };

  return (
    <Link to="/">
      <div className="header">
        <div className="container">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>Reactive Pizza</h1>
              <p>самая вкусная пицца во вселенной, написанная почти на чистом React!</p>
            </div>
          </div>
          <div className="header__cart">
            <Route path="/" exact>
              <Button
                total={totalPrice}
                quantity={totalCount}
                outline={false}
                buttonHandler={buttonHandler}
              />
            </Route>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Header;
