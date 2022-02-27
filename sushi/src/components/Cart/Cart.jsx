import React from 'react';
import st from './Cart.module.sass'
import location from '../../assets/images/location.svg'
import Iframe from "../UI/Iframe";
const Cart = () => {
    const mapLoc = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d93582.32911110511!2d74.52525457942092!3d42.863392011782516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1641622109633!5m2!1sru!2sru"
    return (
        <div className={st.right}>
            <div className={st.right__wrapper}>
                <div className={st.cart}>
                    <h2 className={st.cart__title}>Ваша корзина пуста.</h2>
                    <p className={st.cart__clear}>Добавьте же скорее что-нибудь!</p>
                    <p className={st.cart__free}>Бесплатная доставка от 800 СОМ</p>
                </div>
                <div className={st.location}>
                    <div className={st.location__map}>
                        <Iframe source={mapLoc}/>
                    </div>
                    <img src={location} alt="location"/>
                    <div className={st.bottom}>
                        <h2 className={st.location__title}>Укажите адрес</h2>
                        <p className={st.location__time}>И узнайте время доставки</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;