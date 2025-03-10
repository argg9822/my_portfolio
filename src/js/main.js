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

function rebaseTopMenu(){
  console.log("Scrolling")
  const mainContainer = document.getElementById('app');
  const titles = document.getElementsByClassName('section-title');

  Array.from(titles).forEach(title => {
    console.log(title.getBoundingClientRect().top);
    
  });
  console.log(mainContainer.getBoundingClientRect().top);
}

document.addEventListener('DOMContentLoaded', function () {
  initializeBasicsSlides();
});

document.addEventListener('scroll', rebaseTopMenu());
