import SwiperCore, { Pagination , Navigation  } from 'swiper/core'

SwiperCore.use([Pagination , Navigation ])
const swiper = new SwiperCore('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 110,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})