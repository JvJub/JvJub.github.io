import React from 'react';

// Import Components:

// Import Assets Files:
import carouselPng from '../../assets/images/carousel/carousel1.png'
import arrowPng from '../../assets/images/carousel/carousel-arrow.png'


const Carousel = () => {
  return (
    <section className="carousel">
      <div className="carousel__control">
        <img src={carouselPng} alt="carousel" className="carousel__control__image" />
        <button className="carousel__control__btn">КУПИТЬ</button>
        <div className="carousel__control__arrow-right">
          <img src={arrowPng} alt="arrow-right" />
        </div>
        <div className="carousel__control__arrow-left">
          <img src={arrowPng} alt="arrow-left" />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
