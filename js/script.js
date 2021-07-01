'use strict';


class Slider{
    
    constructor(h3, h2, p, a, parentSelector,...classes){
        this.h3 = h3;
        this.h2 = h2;
        this.p = p;
        this.a = a;
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
            <a href="#">${this.a}</a>
        `;
        this.parent.append(element);
    }
}

new Slider(
    "Unique and Modern Design",
    "Portfolio PSD Template",
    'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.',
    'Get Started',
    '.viewport .head_text'
).render();

new Slider(
    "Unique and Modern Design",
    "Portfolio PSD Template",
    'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.',
    'Get Started',
    '.viewport .head_text'
).render();