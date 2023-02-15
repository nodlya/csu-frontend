import React, {useState} from 'react';
import './carousel.less';
import empty from '@Assets/images/empty.png'
import fill from '@Assets/images/fill.png'
import slides from '@Helpers/slides-helper'

const Carousel = () => {
    const [value, setValue] = useState(0);
    console.log(value);
    return(
    <div className='carousel'>
        <button className='left' onClick={() => setValue(value == 1 ? 0 : 1)}>Prev</button>
        <div className='carousel__left-info'>
            <p className='carousel__header'>{slides[value]['title']}</p>
            <p className='carousel__main-text'>{slides[value]['subtext']}</p>
            <button className='carousel__i-will-have-order'>Заказать доставку</button>
        </div>
        <img className='dot1' alt='dot1' src={value==0 ? fill : empty} onClick={() => {
            if (value==1) setValue(0)
        }}/>
        <img className='dot2' alt='dot2' src={value==0 ? empty : fill} onClick={() => {
            if (value==0) setValue(1)
        }}/>
        <img className="carousel__img" src={slides[value]['picture']} alt='нет картинки('/>
        <button className='right' onClick={() => setValue(value == 1? 0 : 1)}>Next</button>
    </div>
)};

//var index = 0;


// function next(){
//     index++;
//     console.log(index);
//     let header = document.getElementsByClassName('carousel__headercarousel__header');
//     let main_text = document.getElementsByClassName('carousel__main-text');
//     let img = document.getElementsByClassName('carousel__img');
//     if (index == 1){
//         header.innerText = slides[1]['title'];
//         main_text.innerText = slides[1]['subtext'];
//         img.src = slides[1]['picture'];
//     }

//     if (index>1) index = -1;

//     if (index==0){
//         header.innerText = slides[0]['title'];
//         main_text.innerText = slides[0]['subtext'];
//         img.src = slides[0]['picture'];
//     }
// }

export default Carousel;