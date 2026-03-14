document.addEventListener('DOMContentLoaded', function () {
  initializeBasicsSlides();
  window.addEventListener('scroll', rebaseTopMenu);
  menu();
  scaleImageCerts();
});

const NAV_LINKS = document.querySelector('.scroll-nav');

function initializeBasicsSlides (){
  document.querySelectorAll('.splide').forEach(carousel => {
    const splide = new Splide(carousel, {
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
  });
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

function scaleImageCerts() {
  const certs = document.querySelectorAll('.cert');
  const blurred = document.querySelector('.blurred');

  let placeholder = null;

  const reset = () => {
    certs.forEach(cert => cert.classList.remove('scaled'));
    blurred.classList.remove('active');

    if (placeholder) {
      placeholder.remove();
      placeholder = null;
    }
  };

  certs.forEach(cert => {
    cert.addEventListener('click', (e) => {
      e.stopPropagation();

      reset();

      const rect = cert.getBoundingClientRect();

      placeholder = document.createElement('div');
      placeholder.style.width = rect.width + "px";
      placeholder.style.height = rect.height + "px";

      cert.parentNode.insertBefore(placeholder, cert);

      cert.classList.add('scaled');

      blurred.classList.add('active');
    });
  });

  blurred.addEventListener('click', reset);
  document.addEventListener('click', reset);
}