import React from 'react';
import st from './About.module.sass'
import arrowDown from '../../assets/images/arrow-down.svg'
const About = () => {
    return (
        <section className={`${st.about} about__small_container about__content`}>
            <p className={st.about__title}>Заказать суши в Бишкеке</p>
            <p className={st.about__text}>
                Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные
                по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших
                поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом
                или в офис.
            </p>
            <p className={st.about__menu_title}>
                В нашем меню более 20 видов суши:
            </p>
            <ul className={st.about__menu_menu}>
                <li key={`1`} className={st.about__menu_item}>
                    Классические с сырым лососем, тунцом, окунем.
                </li>
                <li key={`2`} className={st.about__menu_item}>
                    Экзотические с тигровой креветкой, морским гребешком.
                </li>
                <li key={`3`} className={st.about__menu_item}>
                    Пикантные с копченым лососем, угрем.
                </li>
            </ul>
            <p className={st.about__bottom}>
                В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский
                майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом
                спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.

            </p>
            <button className={st.about__button}>
                Подробнее
                <img src={arrowDown} alt='arrow-down'/>
            </button>
        </section>
    );
};

export default About;