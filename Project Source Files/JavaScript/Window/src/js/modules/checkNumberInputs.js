'use strict';

// Checking for entering numbers:

const checkNumberInputs = (selector) => {

  // Get Node Element
  const numberInputs = document.querySelectorAll(selector);

  // Check Number Inputs
  numberInputs.forEach((item, index, massive) => {
    item.addEventListener('input', (event) => {
      item.value = item.value.replace(/\D/, '');
    });
  });
  
};

export default checkNumberInputs;