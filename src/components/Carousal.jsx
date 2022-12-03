import React from 'react';
import '../styles/carousal.less';
import car from '@Assets/images/car.png'

const Carousal = () => (
    <div className='carousal'>
        <div className='carousal__left-info'>
            <p className='carousal__header'>Срочная доставка<br/>день в день</p>
            <p className='carousal__main-text'>Для тех, кто не может ждать у нас есть услуга срочной курьерской <br/>
                доставки корреспондеции и других видов отправлений.</p>
            <button className='carousal__i-will-have-order'>Заказать доставку</button>
        </div>
        <img src={car} className="carousal__img"/>
    </div>
);

export default Carousal;