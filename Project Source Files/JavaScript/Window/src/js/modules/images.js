'use strict';

// Images:
const images = () => {

  // Get Node elements
  const imgPopup = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImage = document.createElement('img');
  
  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  // Center Modal Window
  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImage);

  // Event. Event delegation is used
  workSection.addEventListener('click', (event) => {
    event.preventDefault();
  
    const target = event.target;
    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
      document.body.style.overflow = 'hidden';
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
    }
  });

};

export default images;