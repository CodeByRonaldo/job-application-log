import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/core/index.jsx';
import NewAppRecord from './pages/routes/new-app-record.jsx';

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/new-app-record' element={ <NewAppRecord /> } />
                </Routes>
            </Router>
        </>
    );
};