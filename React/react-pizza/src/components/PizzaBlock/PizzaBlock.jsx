import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Import React Components:

// Import Assets Files:

const PizzaBlock = ({
  name,
  imageUrl,
  price,
  id,
  types = [],
  sizes = [],
  onAddPizzaToCart,
  cartItems,
}) => {
  const typeName = ['тонкое', 'традиционное'];
  const sizeName = [26, 30, 40];

  const [activeTypes, setActiveTypes] = useState(types[0]);
  const [activeSizes, setActiveSizes] = useState(0);

  const toggleTypesHandler = (index) => {
    setActiveTypes(index);
  };

  const toggleSizesHandler = (index) => {
    setActiveSizes(index);
  };

  const handleAddPizza = () => {
    const object = {
      id,
      name,
      imageUrl,
      price,
      type: typeName[activeTypes],
      size: sizeName[activeSizes],
    };

    onAddPizzaToCart(object);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typeName.map((type, index) => (
            <li
              onClick={() => toggleTypesHandler(index)}
              className={classNames('', {
                active: activeTypes === index,
                disabled: !types.includes(index),
              })}
              key={`${index}_${id}`}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizeName.map((size, index) => (
            <li
              onClick={() => toggleSizesHandler(index)}
              className={classNames('', {
                active: activeSizes === index,
                disabled: !sizes.includes(size),
              })}
              key={`${index}_${id}`}>{`${size} см.`}</li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button className="button button--outline button--add" onClick={handleAddPizza}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {cartItems && <i>{cartItems}</i>}
        </button>
      </div>
    </div>
  );
};

// PropTypes
PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  onAddPizzaToCart: PropTypes.func,
  cartItems: PropTypes.number,
};

PizzaBlock.defaultProps = {
  name: '---------',
  price: 999,
  types: [],
  sizes: [],
};

export default PizzaBlock;
