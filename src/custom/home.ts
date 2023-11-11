import template from "../template/home";

class MainPresentation extends HTMLElement{
    public constructor(){
        super();
    }

    public connectedCallback(){
        this.innerHTML = template
    }

    public disconnectedCallback(){

    }
}

customElements.define('main-presentation', MainPresentation)

export default MainPresentation;
