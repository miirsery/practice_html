import Swiper, {Navigation, Scrollbar} from "swiper";

if (window.location.pathname === '/') {
    new Swiper('.reviews-swiper', {
        modules: [Navigation, Scrollbar],
        spaceBetween: 20,
        slidesPerView: 1.7,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        }
    })
    let reviews = document.querySelector('.reviews__content')
    const distance = document.querySelector('.header__wrapper').getBoundingClientRect()
    reviews.style.marginLeft = `${Math.round(distance.left + 15)}px`
}
