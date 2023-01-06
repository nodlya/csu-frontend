import React, { useState } from 'react';
import logo from '@Assets/images/logo.png';
import phone from '@Assets/images/phone.png';
import Modal from '@Components/Modal/Modal';

import './header.less';



const Header = ({openModal}) => {
    return (
        <header className='header'>
            <div className='header-left'>
                <img className='header__logo-png' src={logo}/>
                <p className='header__text-info header__light-text'>Курьерская служба доставки</p>
            </div>
            <div className='header-right'>
                <div className='header__phone__container'>
                    <img className='header__phone-png' src={phone}/>
                    <a href='tel:+79090231251' className='header__phone header__light-text'>8 (909) 023-12-51</a>
                </div>
                <button className='header__enter-button' onClick={openModal}>Вход</button>
            </div>
        </header>)
};

export default Header;