import React from 'react';
import './ErrorPage.less';

const ErrorPage = () => {
    <div className='error'>
        <div className='error-darker'/>
        <p className='error__number'>404</p>
        <p className='error__title'>page not found</p>
        <p className='error__oops'>oops...</p>
        <p className='error__i-did-it-again'>I did it again</p>
        <p className='error__hint'>Just click back and try again</p>
    </div>
}

export default ErrorPage;