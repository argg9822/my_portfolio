import DropdownMenu from './classes/DropdownMenu.js';
import SlidesFunction from './classes/SlidesFunction.js';

const toggleDropDown = new DropdownMenu("btn-menu-1", "items-dd-1");
toggleDropDown.toggleMenu();

const slides = new SlidesFunction("btn-back-slide","btn-next-slide", "img-sld");
slides.slideLeft();
