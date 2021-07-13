import React from 'react';

// Import Components:
import { Header } from '../components';

// Import Assets Files:
import arrowSvg from '../assets/images/icons/arrow-small.svg';

const Orders = () => {
  return (
    <div className="container">
      <Header totalCount={1205}/>

      <section className="orders">
        <div className="orders__back">
          <div className="orders__back__icon">
          <a href="!"><img src={arrowSvg} alt="arrow" className="orders__back__icon__image"/></a>
          </div>
          <div className="orders__back__title">Мои покупки</div>
        </div>
      </section>
    </div>
  )
};

export default Orders;

