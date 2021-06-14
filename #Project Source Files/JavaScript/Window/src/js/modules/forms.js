'use strict';

// Imports:
import checkNumberInputs from './checkNumberInputs';

const forms = (state) => {

  // Get Node Elements
  const form = document.querySelectorAll('form'),
    formInput = document.querySelectorAll('input');
  
  // Check Phone Inputs
  checkNumberInputs('input[name="user_phone"]');
   
  // Status message
  const message = {
    success: 'Форма успешно отправлена, скоро мы свяжемся с вами!',
    loading: 'Идет загрузка...',
    fail: 'Ох, к сожалению  произошла ошибка...'
  };

  // Clear Inputs
  const clearInputs = () => {

    formInput.forEach((item, index, massive) => {
      item.value = '';
    });

  };

  // Sending Data 
  const postData = async (url, data) => {

    // Show Message
    document.querySelector('.status').innerHTML = message.loading;

    const resultData = await fetch(url, {
      method: 'POST',
      body: data
    });

    return await resultData.text();
  };

  // Working ​with forms
  form.forEach((item, index, massive) => {
    item.addEventListener('submit', (event) => {
      event.preventDefault();

      // Status Message
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      // Getting Form Data
      const data = new FormData(item);

      // Checking for submitting a form with the state
      if (item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          data.append(key, state[key]);
        }
      }
      
      // AJAX
      postData('assets/server.php', data)
        .then((response) => {
          console.log(response);
          statusMessage.innerHTML = message.success;
        })
        .catch(() => {
          statusMessage.innerHTML = message.fail;
        })
        .finally(() => {
          clearInputs();

          // Clear Message
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });

    });
  });

};

export default forms;