// Mailer
$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '../../../php/mailer/smart.php',
      data: $(this).serialize()
    }).done(function () {
      $(this).find('input').val('');

      $('#consultation, #order').fadeOut();
      $('.overlay, #application').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
  })
});