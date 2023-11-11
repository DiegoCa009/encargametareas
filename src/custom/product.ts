class Product extends HTMLElement{
    public constructor(){
        super()
        
    }

    public connectedCallback(){
        // const shadow = this.attachShadow({mode: 'open'})
        const customHTML = `<h1>Hola a todos</h1>`;
        this.innerHTML= customHTML;
    }
}


customElements.define('card-tag', Product)
    

export default Product;