import Swiper, {Navigation, EffectCoverflow, Pagination} from "swiper";

new Swiper('.works-swiper', {
    modules: [Navigation, EffectCoverflow, Pagination],
    slidesPerView: 3,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 300,
        depth: 500,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
})