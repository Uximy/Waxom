import slider from '../js/slider.json' assert { type: "json" };
import project from '../js/projects.json' assert { type: "json" };
let number = document.querySelector('.Counters'),
    numberTop = number.getBoundingClientRect().top;


class Render_Slider {
    constructor(h3, h2, p, a, link, parentSelector, ...classes) {
        this.h3 = h3;
        this.h2 = h2;
        this.p = p;
        this.a = a;
        this.link = link;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');

        if (this.classes.length === 0) {
            this.element = 'slider';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }

        element.innerHTML = `
            <h3>${this.h3}</h3>
            <h2>${this.h2}</h2>
            <p>${this.p}</p>
            <a href="${this.link}">${this.a}</a>
        `;
        this.parent.append(element);
    }
}

for (let i = 0; i < Object.keys(slider).length; i++) {
    new Render_Slider(
        slider[Object.keys(slider)[i]].h3,
        slider[Object.keys(slider)[i]].h2,
        slider[Object.keys(slider)[i]].p,
        slider[Object.keys(slider)[i]].a,
        slider[Object.keys(slider)[i]].link,
        slider[Object.keys(slider)[i]].selector
    ).render();
}

class Render_Project {
    constructor(img, link1, link2, h3, p, alt, parentSelector, ...classes) {
        this.img = img;
        this.h3 = h3;
        this.p = p;
        this.link1 = link1;
        this.link2 = link2;
        this.alt = alt;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');

        if (this.classes.length === 0) {
            this.element = 'project';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }

        element.innerHTML = `
            <img src="${this.img}" alt="${this.alt}">
            <div class="hovers">
                <a href="${this.link1}"><i class="fi-rr-link"></i></a>
                <a href="${this.link2}"><i class="fi-rr-search"></i></a>
            </div>
            <div class="blocktext_project">
                <svg version="1.1"  width="100%" height="100px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve" viewBox="0 0 100 100" preserveAspectRatio="none" >
            
                <polygon points="0,100 50,0 100,100"/>
            </svg>
                <h3>${this.h3}</h3>
                <p>${this.p}</p>
            </div>
        `;
        this.parent.append(element);
    }
}

for (let i = 0; i < Object.keys(project).length; i++) {
    new Render_Project(
        project[Object.keys(project)[i]].img,
        project[Object.keys(project)[i]].link1,
        project[Object.keys(project)[i]].link2,
        project[Object.keys(project)[i]].h3,
        project[Object.keys(project)[i]].p,
        Object.keys(project),
        project[Object.keys(project)[i]].selector
    ).render();
}

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        console.log('я тут');
        setTimeout(function () {
            $.easing.bullshit = function (x, t, b, c, d) {
                return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            };

            $('.block_counter span').each(function () {
                $(this).prop('counter', 0).animate({
                    counter: $(this).text(),
                }, {
                    duration: 10000,
                    easing: 'bullshit',
                    step(val) {
                        $(this).text(Math.ceil(val));
                    },
                });
            });
        }, 5);
    }
});