import React from 'react';
import Header from '@Components/Header/Header'
import Carousel from '@Components/Carousel/Carousel';
import Steps from '@Components/Steps/Steps';
import Footer from '@Components/Footer/Footer';
import Auth from '@Components/Auth/Auth';
import LoginPortal from '@Components/LoginPortal/LoginPortal'
import Modal from '@Components/Modal/Modal';
import './index.less';
import 'reset-css';

const Main = () => {
    const [isOpen, setIsOpen] = React.useState(false);  
    return(
    <div className="main-page">
        <div className=''>
            <Auth/>
            <Header openModal={() => setIsOpen(true)}/>
            <Carousel/>
            <div className='main-page__steps'>
                <p className='main-page__steps__title'>5 шагов к заявке</p>
                <Steps className='main-page__steps__steps'/>
            </div>
            <Footer/>
        </div>
        {isOpen ? (
                <LoginPortal>
                    <Modal
                        closeModal={(e) => {
                            setIsOpen(false);
                        }}
                    />
                </LoginPortal>
            ) : (
                <div />
            )}
    </div>)
};

export default Main;
