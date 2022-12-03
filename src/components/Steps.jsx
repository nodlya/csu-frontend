import React from 'react';
import Step from './Step';


function Steps(){
    const list = headerArray.map((header) => <Step 
    pic={'@Assets/images/ico' + header.toString()} 
    name={header} />);
    return list;
}

export default Steps;