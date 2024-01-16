class SlidesFunction {
    constructor (btnBack, btnNext, boxSlide){
        this.back = document.getElementById(btnBack);
        this.next = document.getElementById(btnNext);
        this.slide = document.getElementById(boxSlide);
        this.slideLeft();
    }

    slideLeft(){
        this.back.addEventListener('click', () => {
            this.slide.setAttribute("class", "slideLeft");
        }); 
    }
}

export default SlidesFunction;