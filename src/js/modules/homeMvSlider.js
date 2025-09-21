import { Splide } from '@splidejs/splide';

export function homeMvSlider() {
  const mvSlider = document.querySelector('.js-home-mv-slider');

  if (mvSlider === null) return;

  if (mvSlider) {
    new Splide(mvSlider, {
      type: 'fade',
      autoplay: true,
      interval: 7000,
      pauseOnHover: false,
      arrows: false,
      pagination: false,
      speed: 3000,
      easing: 'ease-in-out',
      rewind: true,
      updateOnMove: true,
    }).mount();
  }
}
