window.addEventListener('DOMContentLoaded', function () {

  'use strict';

  // Tabs
  const $info = document.querySelector('.info-header'),
    $tabs = document.querySelectorAll('.info-header-tab'),
    $tabsContent = document.querySelectorAll('.info-tabcontent');

  function hideTabsContent(a) {
    for (let i = a; i < $tabsContent.length; i++) {
      $tabsContent[i].classList.remove('show');
      $tabsContent[i].classList.add('hide');
    }
  }
  hideTabsContent(1);

  function showTabsContent(b) {
    if ($tabsContent[b].classList.contains('hide')) {
      $tabsContent[b].classList.remove('hide');
      $tabsContent[b].classList.add('show');
    }
  }

  $info.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.matches('div.info-header-tab')) {
      for (let i = 0; i < $tabs.length; i++) {
        if (target == $tabs[i]) {
          hideTabsContent(0);
          showTabsContent(i);
          break;
        }
      }
    }
  });

  // Timer  
  const deadline = '2021-10-10';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());

    const seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));

    return {
      'total': t,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours
    };
  }

  function setClock(wrapperId, endtime) {
    const $timerWrapper = document.getElementById(wrapperId),
      $hours = $timerWrapper.querySelector('.hours'),
      $minutes = $timerWrapper.querySelector('.minutes'),
      $seconds = $timerWrapper.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      const t = getTimeRemaining(endtime);

      function addZero(num) {
        if (num <= 9) {
          return '0' + num;
        } else {
          return num;
        }
      }

      $hours.textContent = addZero(t.hours);
      $minutes.textContent = addZero(t.minutes);
      $seconds.textContent = addZero(t.seconds);

      if (t === 0) {
        clearInterval(timeInterval);
        $hours.textContent = '00';
        $minutes.textContent = '00';
        $seconds.textContent = '00';
      }
    }
  }
  setClock('timer', deadline);

  // Modal Windows
  const $btnMore = document.querySelector('.more'),
    $overlay = document.querySelector('.overlay'),
    $close = document.querySelector('.popup-close'),
    $tabsMore = document.querySelectorAll('.description-btn');


  // Show Overlay
  function showOverlay() {
    $overlay.style.display = 'block';
    $btnMore.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  }
  // showOverlay();


  $btnMore.addEventListener('click', (event) => {
    showOverlay();
  });

  $tabsMore.forEach((item, index, massive) => {

    item.addEventListener('click', (event) => {
      if (event.target.matches('div.description-btn')) {
        showOverlay();
      }
    });

  });

  $close.addEventListener('click', (event) => {
    function hideOverlay() {
      if ($overlay.style.display === 'block') {
        $overlay.style.display = 'none';
        $btnMore.classList.remove('more-splash');
        document.body.style.overflow = '';
      }
    }
    hideOverlay();
  });


  // Function 'checkRequestStatus"
  function checkRequestStatus(requestState, statusMessage, requestStatus, message) {
    if (requestState < 4) {
      statusMessage.innerHTML = message.loading;
    } else if (requestState === 4 && requestStatus === 200) {
      statusMessage.innerHTML = message.success;
    } else {
      statusMessage.innerHTML = message.failure;
    }
  }


  // Forms and Modals
  const message = {
    loading: 'Идет загрузка...',
    success: 'Спасибо! Скоро мы свяжемся с вами!',
    failure: 'Что-то пошло не так...'
  };

  const $form = document.querySelector('.main-form'),
    $inputs = document.getElementsByTagName('input'),
    $statusMessage = document.createElement('div');
  
  $statusMessage.classList.add('status');

  // Modal Form
  $form.addEventListener('submit', (event) => {
    event.preventDefault();
    $form.appendChild($statusMessage);

    // AJAX Request
    const request = new XMLHttpRequest();

    request.open(
      'POST',
      'server/server.php'
    );

    request.setRequestHeader(
      'Content-type',
      'application/json; charset=utf-8'
    );

    // FormData Object
    const formData = new FormData($form);
    let appData = {};

    formData.forEach((item, index, massive) => {
      appData[index] = item;
    });

    const JSONAppData = JSON.stringify(appData);

    request.send(JSONAppData);

    request.addEventListener('readystatechange', (event) => {
      checkRequestStatus(
        request.readyState,
        $statusMessage,
        request.status,
        message
      );
    });

    for (let i = 0; i < $inputs.length; i++) {
      $inputs[i].value = '';
    }
  });


  // Contact Form
  const $contactForm = document.querySelector('#form');
  
  $contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    $contactForm.appendChild($statusMessage);

    // AJAX Request
    const request = new XMLHttpRequest();

    request.open(
      'POST',
      'server/server.php'
    );

    request.setRequestHeader(
      'Content-type',
      'application/json; charset=utf-8'
    );

    // FormData Object
    const formData = new FormData();
    const object = {};

    formData.forEach((item, index, massive) => {
      object[index] = item;
    });

    const JSONAppData = JSON.stringify(object);

    request.send(JSONAppData);


    request.addEventListener('readystatechange', (event) => {
      checkRequestStatus(
        request.readyState,
        $statusMessage,
        request.status,
        message
      );
    });

    for (let i = 0; i < $inputs.length; i++) {
      $inputs[i].value = '';
    }
  });

  // Slider
  let slideIndex = 1;

  const $slider = document.querySelector('.slider'),
    $sliderItems = document.querySelectorAll('.slider-item'),
    $sliderArrowPrev = document.querySelector('.prev'),
    $sliderArrowNext = document.querySelector('.next'),
    $sliderDotsWrapper = document.querySelector('.slider-dots'),
    $sliderDots = document.querySelectorAll('.dot');
  
  function showSlides(n) {

    // Infinity Slider
    if (n > $sliderItems.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = $sliderItems.length;
    }
    
    $sliderItems.forEach((item, index, massive) => {
      item.style.display = 'none';
    });

    $sliderDots.forEach((item, index, massive) => {
      item.classList.remove('dot-active');
    });

    $sliderItems[slideIndex - 1].style.display = 'block';
    $sliderDots[slideIndex - 1].classList.add('dot-active');

  }
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  $sliderArrowPrev.addEventListener('click', (event) => {
    plusSlides(-1);
  });

  $sliderArrowNext.addEventListener('click', (event) => {
    plusSlides(1);
  });

  $sliderDotsWrapper.addEventListener('click', (event) => {

    for (let i = 0; i < $sliderDots.length + 1; i++) {
      if (event.target.matches('div.dot') && event.target === $sliderDots[i - 1]) {
        currentSlide(i);
      }
    }

  });

  // Calc
  let $calcInputsPerson = document.querySelectorAll('.counter-block-input')[0],
    $calcInputsDays = document.querySelectorAll('.counter-block-input')[1],
    $calcSelect = document.querySelector('#select'),
    $calcTotal = document.querySelector('#total');
  
  let calcPersonSum = 0,
    calcDaysSum = 0,
    total = 0;
  
  $calcTotal.innerHTML = 0;

  $calcInputsPerson.addEventListener('input', function(event) {
    
    calcPersonSum = +this.value;
    total = (calcPersonSum + calcDaysSum) * 4000;

    if ($calcInputsDays.value == '') {
      $calcTotal.innerHTML = 0;
    } else {
      $calcTotal.innerHTML = total;
    }

  });

  $calcInputsDays.addEventListener('input', function(event) {

    calcDaysSum = +this.value;
    total = (calcPersonSum + calcDaysSum) * 4000;

    if ($calcInputsPerson.value == '') {
      $calcTotal.innerHTML = 0;
    } else {
      $calcTotal.innerHTML = total;
    }

  });

  $calcSelect.addEventListener('change', function (event) {

    if ($calcInputsPerson.value == '' || $calcInputsDays.value == '') {
      $calcSelect.innerHTML = 0;
    } else {

      const t = total;
      $calcTotal.innerHTML = t * this.options[this.selectedIndex].value;

    }

  });

});