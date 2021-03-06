import slider from '../js/slider.json' assert { type: "json" };
import project from '../js/projects.json' assert { type: "json" };


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
                <a href="${this.link1}"><i class="fi fi-rs-link"></i></a>
                <a href="${this.link2}"><i class="fi fi-rs-marker"></i></a>
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

var time = 45,
    cc = 1;
$(window).scroll(function() {
  $('#Counters').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 700) {
      if (cc < 2) {
        $(".number").addClass("viz");
        $('div').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});


$(function () { //? ?????????????? ?????? ?????????????????? ?????????? ?????? ??????????????????
    let header = $('.menu_head'); //?????????????? ?????????? menu_head, ?????? ???????? ?????????? ???? ???????? ?????????????????????? ?????????? menu_head_fixed
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('fixed');
            header.addClass('menu_head_fixed');
        }
        else {
            header.removeClass('fixed');
            header.removeClass('menu_head_fixed');

        }
    });
});

const item = document.querySelectorAll('.browser-right'),
    item2 = document.querySelectorAll('.browser-left'),
    item3 = document.querySelectorAll('.browser-center');
const block = document.querySelector('.realization_ideas');

if (item.length > 0) {
    window.addEventListener('scroll', animeOnScroll);
    function animeOnScroll() {
        const animItemHeight = block.offsetHeight,
        animItemOffset = offSet(block).top,
        animStart = 5;
        for (let i = 0; i < item.length; i++) {
            const animeItem = item[i];

            let animItemPont = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPont = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPont) && pageYOffset < (animItemOffset + animItemHeight)) {
                setTimeout(() => {
                    animeItem.classList.add('right');
                }, 1200);
            }
        }

        for (let i = 0; i < item2.length; i++) {
            const animeItem = item3[i];


            let animItemPont = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPont = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPont) && pageYOffset < (animItemOffset + animItemHeight)) {
                setTimeout(() => {
                    animeItem.classList.add('show');
                }, 1200);
            }
        }

        for (let i = 0; i < item2.length; i++) {
            const animeItem = item2[i];

            let animItemPont = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPont = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPont) && pageYOffset < (animItemOffset + animItemHeight)) {
                setTimeout(() => {
                    animeItem.classList.add('left');
                }, 1200);
            }
        }
    }
    function offSet(el) {
        const rect = el.getBoundingClientRect(),
            csrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            csrolltop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + screenTop, left: rect.left + screenLeft }
    }
}