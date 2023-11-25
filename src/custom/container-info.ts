import template from "../template/container";

class ContainerInfo extends HTMLElement{
    public constructor(){
        super()
        
    }
    
    public connectedCallback(){
        const clone = template?.content.cloneNode(true);
        const shadow = this.attachShadow({mode:'open'});
        shadow.appendChild(clone);
        this.classList.add('container');        
    }
}


customElements.define('container-info', ContainerInfo)

export default ContainerInfo;