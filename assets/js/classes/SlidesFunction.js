class SlidesFunction {
    constructor (atrSlides){
        if (typeof atrSlides !== 'object' || atrSlides === null || Array.isArray(atrSlides)) {
            throw new Error('El parámetro debe ser un objeto no nulo.');
        }else{
            this.back = document.getElementById(atrSlides.btnBack);
            this.next = document.getElementById(atrSlides.btnNext);
            this.slide = document.getElementById(atrSlides.img);
            this.slideLeftFadeOut();
            this.slideRightFadeOut();
        }
    }

    slideLeftFadeOut(){
        this.back.addEventListener('click', () => {
            this.slide.style.opacity = '0';
            this.slide.setAttribute("class", "slideLeft");

            setTimeout(() => {
                this.slide.style.display = 'none';
            }, 2000);
            
        }); 
    }

    slideRightFadeOut(){
        this.next.addEventListener('click', () => {
            this.slide.style.opacity = '0';
            this.slide.setAttribute("class", "slideRight");

            setTimeout(() => {
                this.slide.style.display = 'none';
            }, 2000);
            
        }); 
    }
}

export default SlidesFunction;