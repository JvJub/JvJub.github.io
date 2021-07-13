import React, { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Import React Components:

// Import Assets Files:

const Categories = memo(function Categories({ activeCategory, categoriesItems, onClickItem }) {
  return (
    <div className="categories">
      <ul>
        {categoriesItems &&
          categoriesItems.map((item, index) => (
            <li
              className={classNames('', {
                active: activeCategory === index,
              })}
              onClick={() => onClickItem(index)}
              key={`${item}_${index}`}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

// PropTypes
Categories.propTypes = {
  categoriesItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func,
  activeCategory: PropTypes.number,
};

export default Categories;
