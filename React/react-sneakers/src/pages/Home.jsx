import React from 'react';

// Import Components:
import { Header, Carousel, Magazine, Cart, CartEmpty, CartOrdered } from '../components/';

const Home = () => {
  return (
    <>
      {/* <Cart /> 
      <CartEmpty/>
      <CartOrdered orderNum={18}/> */}
      <div className="container">
        <Header totalCount={1205} />
        <Carousel />
        <Magazine />
      </div>
    </>
  )
}

export default Home;
