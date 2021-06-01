'use strict';

// Timer:
const timer = (id, deadline) => {

  // Add Zero To Format Data
  const addZero = (number) => {
    if (number <= 9) {
      return "0" + number;
    } else {
      return number;
    }
  };

  // Get Time Remaining
  const getTimeRemaining = (endtime) => {

    // Get time
    const time = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((time / 1000) % 60),
      minutes = Math.floor((time / 1000 / 60) % 60),
      hours = Math.floor((time / (1000 * 60 * 60)) % 24),
      days = Math.floor((time / (1000 * 60 * 60 * 24)));

    return {
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours,
      'days': days,
      'total': time
    };

  };

  // Set Time
  const setClock = (selector, endtime) => {

    // Get Node Elements
    const timerWrapper = document.querySelector(selector),
      days = timerWrapper.querySelector('#days'),
      hours = timerWrapper.querySelector('#hours'),
      minutes = timerWrapper.querySelector('#minutes'),
      seconds = timerWrapper.querySelector('#seconds'),

      timeInterval = setInterval(updateClock, 1000);

    // Update Clock
    updateClock();
    
    function updateClock() {
      const t = getTimeRemaining(endtime);

      // Update 
      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        clearInterval(timeInterval);
      }
    }

  };

  setClock(id, deadline);
};

export default timer;