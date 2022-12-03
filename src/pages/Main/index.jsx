import React from 'react';
import Header from '@Components/header'
import Carousal from '@Components/Carousal';
import Step from '@Components/Step';

import '../../styles/main.less';

const Main = () => (
    <div className="main-page">
        <div className=''>
            <Header/>
            <Carousal/>
            <div className='main-page__steps'>
                <p>5 шагов к заявке</p>
                <Step pic=''/>
            </div>
        </div>
    </div>
);

export default Main;
