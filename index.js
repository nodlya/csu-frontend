import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'regenerator-runtime/runtime';
import 'whatwg-fetch';
import 'core-js';

import App from './src/App';
import Modal from '@Components/Modal/Modal';

import '@Styles/global.less';

const root = ReactDOM.createRoot(document.getElementById('app-root'));
//const modalRoot = ReactDOM.createPortal(document.getElementById('modal-root'));

root.render(
    <BrowserRouter>
        <App />
        <Modal/>
    </BrowserRouter>
);
