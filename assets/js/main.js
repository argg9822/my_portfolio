import DropdownMenu from './classes/dropdownMenu.js';
import SlidesFunction from './classes/SlidesFunction.js';

const toggleDropDown = new DropdownMenu("btn-menu-1", "items-dd-1");
toggleDropDown.toggleMenu();

const slides = new SlidesFunction({
    btnBack: "btn-back-slide",
    btnNext: "btn-next-slide",
    img: "img-sld"
})

slides.slideLeftFadeOut();
slides.slideRightFadeOut();

console.log(document.getElementById('img-sld').offsetLeft);