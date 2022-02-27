import React from 'react';
import SwiperCore, {Pagination, Autoplay} from 'swiper'
import {SwiperSlide, Swiper} from "swiper/react";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import st from './Hero.module.sass'
import slide from '../../assets/images/hero-slide.jpg'

SwiperCore.use([Pagination, Autoplay]);
const Hero = () => {
    const slides = []
    for (let i = 0; i < 5; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li">
                <img src={slide} alt={`slide${i}`}/>
            </SwiperSlide>
        )
    }
    return (
        <div className={st.swiper__wrapper}>
            <Swiper
                pagination={true}
                spaceBetween={50}
                className='mySwiper'
                autoplay={{ delay: 2000 }}

            >
                <Swiper tag='section' wrapperTag='ul'>{slides}</Swiper>
            </Swiper>
        </div>
    );
};

export default Hero;