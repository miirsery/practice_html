import React from 'react';
import firstImage from '../../assets/images/catalog/1.jpg'
import secondImage from '../../assets/images/catalog/2.jpg'
import thirdImage from '../../assets/images/catalog/3.jpg'
import fourthImage from '../../assets/images/catalog/4.jpg'
import fifthImage from '../../assets/images/catalog/5.jpg'
import st from './Catalog.module.sass'

const images = [
    {
        image: firstImage,
        description: 'Чикен'
    },
    {
        image: secondImage,
        description: 'С угрем'
    },
    {
        image: thirdImage,
        description: 'Корн дог'
    },
    {
        image: fourthImage,
        description: 'Пицца'
    },
    {
        image: fifthImage,
        description: 'Акции'
    }
]
const Catalog = () => {
    return (
        <div className={st.items}>
            {images.map((item, index) => (
                <div className={`${st.item} ${st.item}+${index}`}>
                    <img src={item.image} alt={`${index}`}/>
                    <p className={st.title}>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Catalog;