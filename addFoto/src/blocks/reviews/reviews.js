import Swiper, {EffectCoverflow, Navigation, Pagination} from "swiper";

new Swiper('.reviews-swiper', {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 27,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})