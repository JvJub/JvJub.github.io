"use strict";

// Imports:

// Slider
import './slider.js';

// Modals
import modals from './modules/modals.js';

// Tabs
import tabs from './modules/tabs.js';

// Forms
import forms from './modules/forms.js';

// Change Module State
import changeModuleState from './modules/changeModuleState.js';

// Timer
import timer from './modules/timer.js';

// Images
import images from './modules/images.js';

window.addEventListener('DOMContentLoaded', function () {
  
  // Module State:
  let modalState = {};

  // DeadLine
  const deadline = '2021-12-31';

  // Change Module State:
  changeModuleState(modalState);

  // Modals Window
  modals();

  // Tabs:
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');

  // Forms
  forms(modalState);

  // Timer
  timer('.container1', deadline);

  // Images
  images();

});