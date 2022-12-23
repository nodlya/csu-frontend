import React from 'react';
import './step.less';

const Step = (props) => (
    <div className='step'>
        <img className='step__pic' src={props.source} alt='no pic('/>
        <p className='step__title'>{props.name}</p>
        <p className='step__text'>Lorem ipsum dolor sit amet, consectetur adipisicing<br/> elitsequi nesciunt.</p> 
    </div>
);

export default Step;