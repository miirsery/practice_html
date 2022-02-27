import React from 'react';
import st from './Footer.module.sass'

import whatsapp from '../../assets/images/social/whatsapp.svg'
import telegram from '../../assets/images/social/telegram.svg'
import instagram from '../../assets/images/social/instagram.svg'


const Footer = () => {
    return (
        <footer className='footer__small_container'>
            <div className={st.footer__wrapper}>
                <ul className={st.left}>
                    <li className={st.left__item}>
                        <a href='/' className={st.left__link}>О компании</a>
                    </li>
                    <li className={st.left__item}>
                        <a href='/' className={st.left__link}>Доставка и оплата</a>
                    </li>
                    <li className={st.left__item}>
                        <a href='/' className={st.left__link}>Лента материалов</a>
                    </li>
                    <li className={st.left__item}>
                        <a href='/' className={st.left__link}>Политика возврата</a>
                    </li>
                </ul>
                <div className={st.center}>
                    <p className={st.center__text}>
                        Выберите удобный <br/>
                        мессенджер для общения
                    </p>
                    <ul className={st.center__socials}>
                        <li className={st.center__item}>
                            <img src={whatsapp} alt="whatsapp"/>
                        </li>
                        <li className={st.center__item}>
                            <img src={telegram} alt="telegram"/>
                        </li>
                        <li className={st.center__item}>
                            <img src={instagram} alt="instagram"/>
                        </li>
                    </ul>
                </div>
                <ul className={st.right}>
                    <p>Тел:+996 705 188 955 </p>
                    <p>Тел:+996 705 188 955 </p>
                    <p>Адрес:Бакаева 126 </p>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;