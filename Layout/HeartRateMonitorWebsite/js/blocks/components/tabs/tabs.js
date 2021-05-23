$(document).ready(function () {
  // Tabs
  $('ul.tabs').on('click', 'li:not(.tabs__item_active)', function () {
    $(this)
      .addClass('tabs__item_active').siblings().removeClass('tabs__item_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  // Back Tabs Content
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__lists').eq(i).toggleClass('catalog-item__lists_active');
      })
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__link-back');

});