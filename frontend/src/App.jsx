import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/core/index.jsx';
import NewAppRecord from './pages/routes/new-app-record.jsx';
import ProfilePage from './pages/routes/profile-page.jsx';

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/new-app-record' element={ <NewAppRecord /> } />
                    <Route path='/profile' element={ <ProfilePage /> } />
                </Routes>
            </Router>
        </>
    );
};