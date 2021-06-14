'use strict';

// Imports:
import checkNumberInputs from './checkNumberInputs';

// Change Module State
const changeModuleState = (state) => {

  // Get Node Elements
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');
  
  // Validate Number Inputs
  checkNumberInputs('#width');
  checkNumberInputs('#height');


  // Bind Action To Elements
  function bindActionToElems(element, prop, event = 'click') {

    // Checking the number of elements
    element.forEach((item, index, massive) => {
      item.addEventListener(event, () => {

        switch (item.nodeName) {
          case 'SPAN': {
            state[prop] = index;
            break;
          }
          case 'INPUT': {

            if (item.getAttribute('type') === 'checkbox') {

              index === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
              element.forEach((a, b) => {
                a.checked = false;
                if (index == b) {
                  a.checked = true;
                }
              });

            } else {
              state[prop] = item.value;
            }
            break;
          }
          case 'SELECT': {
            state[prop] = item.value;
            break;
          }
        }
      });
    });

  }

  // Bind Actions
  bindActionToElems(windowForm, 'form', 'click');
  bindActionToElems(windowWidth, 'width', 'input');
  bindActionToElems(windowHeight, 'height', 'input');
  bindActionToElems(windowType, 'type', 'change');
  bindActionToElems(windowProfile, 'profile', 'change');

};

export default changeModuleState;