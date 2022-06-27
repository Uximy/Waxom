import text from '../js/slider.json' assert { type: "json" };

class Render_Slider{
    
    constructor(h3, h2, p, a, link,parentSelector,...classes){
        this.h3 = h3;
        this.h2 = h2;
        this.p = p;
        this.a = a;
        this.link = link;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
    }

    render(){
        const element = document.createElement('div');

        if(this.classes.length === 0){
            this.element = 'slider';
            element.classList.add(this.element);
        }else{
            this.classes.forEach(className => element.classList.add(className));
        }

        element.innerHTML =  `
            <h3>${this.h3}</h3>
            <h2>${this.h2}</h2>
            <p>${this.p}</p>
            <a href="${this.link}">${this.a}</a>
        `;
        this.parent.append(element);
    }
}

for (let i = 0; i < Object.keys(text).length; i++) {
    new Render_Slider(
        text[Object.keys(text)[i]].h3,
        text[Object.keys(text)[i]].h2,
        text[Object.keys(text)[i]].p,
        text[Object.keys(text)[i]].a,
        text[Object.keys(text)[i]].link,
        text[Object.keys(text)[i]].selector
    ).render();
}