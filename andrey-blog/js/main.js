const accordion = document.querySelectorAll('.faq__accordion-item');
const menuLinks = document.querySelectorAll('.view-page__link');
const burgerBtn = document.querySelectorAll('.burger-btn');
const menu = document.querySelector('.view-page');
const btnUp = document.querySelector('.btn-up');
/* Accordion Logic */
accordion.forEach(el => {
    el.addEventListener('click', (e) => {
        let child = el.querySelector('.faq__accordion-content');
        let childLabel = el.querySelector('.faq__accordion-label')
        child.classList.toggle('active');
        childLabel.classList.toggle('active');
    });
});
/*--------- */

/* Burger Logic */
burgerBtn.forEach(el => {
    el.addEventListener('click', (e) => {
        let burgerMenu = document.querySelector('.burger__menu');
        burgerMenu.classList.toggle('burger__menu-active');
        el.classList.toggle('burger-btn-active');
    });
});
/*--------- */

/* Scoll Section Start */
 
let scrolls = 0;
let scrollTimeOut;
let delay = 50;

window.addEventListener('scroll', function (e) {
    this.clearTimeout(scrollTimeOut);
    scrollTimeOut = this.setTimeout(function () {
        onScroll(e);
    }, delay);
});
function onScroll(e) {
    console.log(++scrolls)
    let pos = window.pageYOffset;
    if (pos > innerHeight) {
        btnUp.classList.add('btnUp--active');
    }
    else {
        btnUp.classList.remove('btnUp--active');
    }

    for (let i = menuLinks.length - 1; i >= 0; i--) {
        let link = menuLinks[i]
        let header = document.querySelector(link.hash);
        if (pos > (elemOffsetTop(header) - window.innerHeight / 2)) {
            menu.querySelector('.view-page__link-active').classList.remove('view-page__link-active');
            link.classList.add('view-page__link-active');
            break;
        }
    }
}
menu.addEventListener('click', function (e) {
    if (e.target.classList.contains('view-page__link')) {
        e.preventDefault();
        let link = e.target;
        scrollToId(link.hash);
    }
});
btnUp.addEventListener('click', (e) => {
    scrollTopY(0);
});

if (window.location.hash != '') {
    scrollToId(window.location.hash);
}

function scrollTopY(pos) {
    window.scrollTo({
        top: pos,
        behavior: "smooth"
    });
}

function elemOffsetTop(node) {
    let coords = node.getBoundingClientRect();
    return coords.top + window.pageYOffset;
}
function scrollToId(id) {
    let target = document.querySelector(id);

    if (target !== null) {
        let pos = elemOffsetTop(target) - 40;
        scrollTopY(pos);
    }
}
/*-------Scoll Section End----------------- */