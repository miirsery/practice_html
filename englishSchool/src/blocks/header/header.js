import SwiperCore, { Navigation, Pagination , Lazy  } from 'swiper/core'

SwiperCore.use([Navigation, Pagination , Lazy ])


const swiper = new SwiperCore('.mySwiper', {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});