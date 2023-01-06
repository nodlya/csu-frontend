import './footer.less';
import logo from '@Assets/images/logo.png';
import React from 'react';

const Footer = () => (
    <footer>
    <div className='footer'>
        <img className='footer__logo' src={logo} alt='no pic('/>
        <div className='footer__lists'>
        <div className='footer__list1'>
            <a>О компании</a>
            <a>Вакансии</a>
            <a>Клиенту</a>
            <a>Франчайзин</a>
        </div>
        <div className='footer__list2'>
            <a>Доставка из Китая</a>
            <a>Все услуги</a>
            <a>Акции</a>
        </div>
        </div>
        <div className='footer__contacts'>
            <a href='mailto:manager@uexpress.ru'>manager@uexpress.ru</a>
            <a>115221, г. Челябинск, <br/>
            ул. Северная, д. 29-в</a>
            <a>Мы работаем по 24 часа <br/>
                5 дней в неделю</a>
        </div>
    </div>
    </footer>
);

export default Footer;