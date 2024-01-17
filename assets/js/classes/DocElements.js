class DocElements {
    constructor(properties){
        if (typeof atrSlides !== 'object' || atrSlides === null || Array.isArray(atrSlides)) {
            throw new Error('El parámetro debe ser un objeto no nulo.');
        }else{
            this.label = properties.label;
            this.attributes = properties.attributes;
            this.values = properties.values;
            this.father = properties.father;
        }
    }

    insertElement(){
        let new_element = document.createElement(this.label);
    }
}



export default DocElements;