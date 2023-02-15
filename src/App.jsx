import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '@Pages/Main';
import Admin from '@Pages/Admin/Admin';
import ErrorPage from '@Pages/Error/ErrorPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default App;
