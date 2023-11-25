const HTMLData = 
/*html*/`
    <p><slot name="img">defeault</slot></p>
    <p>asdas</p>
`
const CSSData = /*css*/`
.container_info-right{
    background-color:red;
}

p{
   color: blue;
}   

h1{
    color:red
}
`
const CSSTemplate = document.createElement('style');
const HTMLTemplate = document.createElement('template');
const BASETemplate = document.createElement('template');

CSSTemplate.textContent = CSSData;
HTMLTemplate.innerHTML = HTMLData;


BASETemplate.content.appendChild(CSSTemplate)
BASETemplate.content.appendChild(HTMLTemplate.content.cloneNode(true))

export default BASETemplate;

