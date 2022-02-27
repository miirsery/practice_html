import React, {useEffect, useState} from 'react';
import styles from './Header.module.sass'
import search from '../../assets/images/search.svg'

const Header = () => {
    const [city, setCity] = useState('Бишкек')

    useEffect(() => {

    }, [])

    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <div className={styles.contact}>
                    <p className={styles.phone__title}>Наш телефон</p>
                    <div className={styles.phone__one}>+996 705 188 955</div>
                    <div className={styles.phone__two}>+996 555 188 955</div>
                    <div className={styles.workTime}>работаем с 10:00 до 00:00</div>
                </div>
                <div className={styles.center}>
                    <div className={styles.city}>
                        <label htmlFor="#city">Город</label>
                        <input
                            type="text"
                            id='city'
                            placeholder='Введите город...
                            ' value={city}
                            onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    <div className={styles.right}>
                        <button className={styles.right__reviews}>Отзывы</button>
                        <button className={styles.right__delivery}>Доставка и оплата</button>
                        <div className={styles.right__search}>
                            <img src={search} alt='search'/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;