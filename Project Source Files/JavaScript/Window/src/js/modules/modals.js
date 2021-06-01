"use strict";

// Modals Window:
const modals = () => {

  // Bind Modal Window
  function bindModalWindow(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

    // Get Node Elements:
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();
    
    trigger.forEach((item, index, massive) => {
      item.addEventListener('click', (event) => {
        if (event.target) {
          event.preventDefault();

          // Close All Modals
          windows.forEach((item, index, massive) => {
            item.style.display = 'none';
          });

          // Show Modal
          modal.style.display = 'block';
          document.body.classList.add('modal-open');
          document.body.style.marginRight = `${scroll}px`;
        }
      });
    });

    // Close Modal
    close.addEventListener('click', (event) => {
      // Close All Modals
      windows.forEach((item, index, massive) => {
        item.style.display = 'none';
      });

      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
      document.body.style.marginRight = `0px`;
    });

    // Close Modal From The Background
    modal.addEventListener('click', (event) => {
      if (event.target === modal && closeClickOverlay) {
        modal.style.display = 'none';

        document.body.classList.remove('modal-open');

        // Close All Modals
        windows.forEach((item, index, massive) => {
          item.style.display = 'none';
          document.body.style.marginRight = `0px`;
        });
      }
    });
  }
  
  // Call Function
  bindModalWindow('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModalWindow('.phone_link', '.popup', '.popup .popup_close');

  // Cicle Calc Modals
  bindModalWindow('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModalWindow('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModalWindow('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  showModalByTime('.popup', 60000);

  // Show Modal After 60 Seconds:
  function showModalByTime(selector, time) {
    
    const showModal60 = setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.classList.remove('modal-open');
    }, time);

  }

  // Calculating The Scroll Size
  function calcScroll() {
    
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove(scrollWidth);

    return scrollWidth;

  }

};

export default modals;