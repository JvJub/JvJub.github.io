// Validators
$(document).ready(function () {
  // Validation Function
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true,
          phone: true,
          minlength: 11
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: 'Поле не может быть пустым',
          minlength: jQuery.validator.format('Введите {0} символов!')
        },
        phone: {
          required: 'Поле не может быть пустым',
          maxlength: jQuery.validator.format('Введите {0} символов!')
        },
        email: {
          required: 'Поле не может быть пустым',
          email: 'Пожалуйста, введите корректный Email'
        }
      },
      errorClass: 'invalid',
    });
  };
  
  validateForms('#consultation-form');
  validateForms('#order form');
  validateForms('#consultation form');
});