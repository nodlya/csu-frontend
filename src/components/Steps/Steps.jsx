import React from 'react';
import Step from '../Step/Step';
import {titles} from '@Constants/constants';
import {pics} from '@Constants/constants';
import './steps.less';

function Steps() {
    const list = [];
    for (let i = 0; i < 5; i++){
        list.push(<Step className='step' key={i} source={pics[i]} name={titles[i]} />);
    }
    return (<div className='steps'>{list}</div>);
}

export default Steps;