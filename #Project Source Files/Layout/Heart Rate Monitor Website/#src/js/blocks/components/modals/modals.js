$(document).ready(function () {
  // Modals
  // Consultation
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation').fadeOut('slow');
  });
  // Order
  $('[data-modal=order]').on('click', function () {
    $('.overlay, #order').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #order').fadeOut('slow');
  });
});