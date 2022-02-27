import React from 'react';
import st from './Aside.module.sass'
import logoImage from '../../assets/images/logo@1x.svg'

import pizza from '../../assets/images/aside/pizza.svg'
import sets from '../../assets/images/aside/sets.svg'
import wok from '../../assets/images/aside/wok.svg'
import rolls from '../../assets/images/aside/rolls.svg'
import sushi from '../../assets/images/aside/sushi.svg'
import salads from '../../assets/images/aside/salads.svg'
import soups from '../../assets/images/aside/soups.svg'
import cornDogs from '../../assets/images/aside/corn-dogs.svg'
import drinks from '../../assets/images/aside/drinks.svg'
import stocks from '../../assets/images/aside/stocks.svg'

const data = [
    {image: pizza, title: 'Пицца', status: ''},
    {image: sets, title: 'Сеты', status: ''},
    {image: wok, title: 'WOK', status: ''},
    {image: rolls, title: 'Роллы', status: ''},
    {image: sushi, title: 'Суши', status: ''},
    {image: salads, title: 'Салаты', status: 'скоро'},
    {image: soups, title: 'Супы', status: 'скоро'},
    {image: cornDogs, title: 'Корн доги', status: ''},
    {image: drinks, title: 'Напитки', status: ''},
    {image: stocks, title: 'Акции', status: ''}
]

const Aside = () => {
    return (
        <aside className={st.aside}>
            <a className={st.logo__wrapper} href="/">
                <img className={st.logo__img} src={logoImage} alt="logo@2x"/>
            </a>
            <nav className={st.navigation}>
                <ul className={st.menu}>
                    {data.map((item, index) => (
                        <li className={st.item} key={index}>
                            <a href="/" className={st.link}>
                                <img src={item.image} alt={item.title}/>
                                {item.title}
                                {item.status !== '' &&
                                    <span className={st.soon}> {item.status}</span>
                                }
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;