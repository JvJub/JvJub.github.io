// Smooth Scroll And Page Up
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1900) {
      $('.page-up').fadeIn();
    } else {
      $('.page-up').fadeOut();
    }
  });

  // Smooth Scroll
  $("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });
});