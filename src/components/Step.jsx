import React from 'react';
import '@Constants/constants'

const Step = (pic, name) => (
    <div>
        <img src={pic}/>
        <p>{name}</p>
        <p>{text}</p>
    </div>
);

export default Step;