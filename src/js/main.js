function initializeBasicsSlides (){
  const splide = new Splide('.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 1,
    autoScroll: {
      speed: 2,
      autoStart: true
    },
  });
  
  splide.mount();
}

document.addEventListener('DOMContentLoaded', function () {
  initializeBasicsSlides();
});
