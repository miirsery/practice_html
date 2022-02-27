import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from "swiper";
import st from './News.module.sass'

import firstImage from '../../assets/images/news/1.jpg'
import secondImage from '../../assets/images/news/2.jpg'
import thirdImage from '../../assets/images/news/3.jpg'

SwiperCore.use([Navigation]);

const data = [
    {
        image: firstImage,
        title: 'Саломон сет',
        description: '1050 грамм, 30 кусочков',
        price: '1500 СОМ'
    },
    {
        image: secondImage,
        title: 'Филадельфия и лосось сет',
        description: '1260 грамм, 36 кусочков',
        price: '1150 СОМ'
    },
    {
        image: thirdImage,
        title: 'Самая большая Филадельфия',
        description: '2050 грамм, 45 кусочков',
        price: '2100 СОМ'
    },
    {
        image: firstImage,
        title: 'Саломон сет',
        description: '1050 грамм, 30 кусочков',
        price: '1500 СОМ'
    },
    {
        image: secondImage,
        title: 'Филадельфия и лосось сет',
        description: '1260 грамм, 36 кусочков',
        price: '1150 СОМ'
    },
    {
        image: thirdImage,
        title: 'Самая большая Филадельфия',
        description: '2050 грамм, 45 кусочков',
        price: '2100 СОМ'
    }

]

const News = () => {
    return (
        <div className={`${st.news__wrapper} news__content`}>
            <div className={st.news__top}>
                <p className={st.news__top_title}>Новинки</p>
                <p className={st.news__top_subtitle}>Популярное</p>
            </div>
            <div className={st.news__wrapper_swiper}>
                < Swiper
                    tag='section'
                    wrapperTag='ul'
                    slidesPerView={3}
                    spaceBetween={50}
                    navigation={true}
                    className="mySwiper-two"
                >
                    {data.map((item, index) => (
                        <SwiperSlide
                            key={`new-slide-${index}`}
                            tag='li'
                            className={st.news__item}
                        >
                            <div className={st.news__image}>
                                <img src={item.image} alt={item.title}/>
                            </div>
                            <p className={st.news__title}>{item.title}</p>
                            <p className={st.news__description}>{item.description}</p>
                            <div className={st.news__bottom}>
                                <p className={st.news__price}>{item.price}</p>
                                <button className={st.news__button}>Хочу!</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default News;