document.addEventListener('DOMContentLoaded', function () {
  initializeBasicsSlides();
  window.addEventListener('scroll', rebaseTopMenu);
  menu();
});

const NAV_LINKS = document.querySelector('.scroll-nav');

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
  const scrollNav = document.querySelector('.scroll-nav');
  if (window.scrollY > 300) {
    scrollNav.classList.add('active');
  }else{
    scrollNav.classList.remove('active');
  }

  const scrollSectionActive = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY + 50 >= sectionTop && window.scrollY + 50 < sectionTop + sectionHeight) {
        removeClassLinks();
        const button = document.querySelector(`a[href="#${section.id}"]`);
        button.classList.add('active');
      }
    })
  }

  scrollSectionActive();
}

function removeClassLinks () {
  NAV_LINKS.querySelectorAll('.nav-links').forEach(link => {
    link.classList.remove('active');
  });
}

function menu(){
  NAV_LINKS.addEventListener('click', (e) => {
    const button = e.target;
    if (button.classList.contains('nav-links')){
      removeClassLinks();
      button.classList.add('active');
    }
  }); 
}
