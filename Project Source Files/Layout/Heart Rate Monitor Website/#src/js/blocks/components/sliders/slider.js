// Slider
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  autoplay: true,
  speed: 1000,
  mouseDrag: true,
  controls: true
});

// Slider Events
// Next
document.querySelector('.carousel__arrow-next').addEventListener('click', function () {
  slider.goTo('next');
})

// Prev
document.querySelector('.carousel__arrow-prev').addEventListener('click', function () {
  slider.goTo('prev');
})