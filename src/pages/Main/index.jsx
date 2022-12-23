import React from 'react';
import Header from '@Components/header'
import Carousel from '@Components/Carousel';
import Steps from '@Components/Steps';
import Footer from '@Components/Footer';
import Auth from '@Components/Auth';
import '../../styles/main.less';
import 'reset-css';

const Main = () => (
    <div className="main-page">
        <div className=''>
            <Auth/>
            <Header/>
            <Carousel/>
            <div className='main-page__steps'>
                <p className='main-page__steps__title'>5 шагов к заявке</p>
                <Steps className='main-page__steps__steps'/>
            </div>
            <Footer/>
        </div>
    </div>
);

export default Main;
