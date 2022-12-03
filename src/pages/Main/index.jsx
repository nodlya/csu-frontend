import React from 'react';
import Header from '@Components/header'
import Carousal from '@Components/Carousel';
import Step from '@Components/Step';
import Steps from '@Components/Steps';
import ico1 from '@Assets/images/ico1.png';
import '../../styles/main.less';

const Main = () => (
    <div className="main-page">
        <div className=''>
            <Header/>
            <Carousal/>
            <div className='main-page__steps'>
                <p>5 шагов к заявке</p>
                {/* <Steps/> */}
            </div>
        </div>
    </div>
);

export default Main;
