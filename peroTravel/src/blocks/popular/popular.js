import Swiper, {Navigation, Scrollbar} from "swiper";

if (window.location.pathname === '/') {
    new Swiper('.popular-swiper', {
        modules: [Navigation, Scrollbar],
        spaceBetween: 20,
        slidesPerView: 3.5,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2.5,
            },
            900: {
                slidesPerView: 2.8,
            },
            1366: {
                slidesPerView: 3.5,
            },


        }
    })
}
let popular = document.querySelector('.popular__content')
const distance = document.querySelector('.header__wrapper').getBoundingClientRect()
popular.style.marginLeft = `${Math.round(distance.left + 15)}px`
