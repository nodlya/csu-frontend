import React from 'react';
import './carousel.less';
import car from '@Assets/images/car.png'

const Carousel = () => (
    <div className='carousel'>
        <div className='carousel__left-info'>
            <p className='carousel__header'>Срочная доставка<br/>день в день</p>
            <p className='carousel__main-text'>Для тех, кто не может ждать у нас есть услуга срочной курьерской <br/>
                доставки корреспондеции и других видов отправлений.</p>
            <button className='carousel__i-will-have-order'>Заказать доставку</button>
        </div>
        <img src={car} className="carousel__img"/>
    </div>
);

export default Carousel;