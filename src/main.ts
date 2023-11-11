import MainPresentation from './custom/home'
import './style.css'


const app = document.querySelector('#app');
const elements = {
    creations: document.querySelector('#creations'),
}


elements.creations?.addEventListener('click',():void=>{
    console.log('clickeds')
        if (app?.hasChildNodes) app.innerHTML = ''
        
        const custom:HTMLElement = new MainPresentation;
        app?.appendChild(custom);
        const img = document.querySelectorAll('#app img');
        img[0].addEventListener('load',(): void =>{
            console.log('image load')
        })
    
})
