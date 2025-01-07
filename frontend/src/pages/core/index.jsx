import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './index.css'

import Header from '../components/header.jsx';

export default function Home() {
    return (
        <>
            <Header />
            <div className="content-wrapper">
                <div className="content">
                    <div className="company-card">
                        <div className="company-header">
                            <h3>Company A</h3>
                                <div className="app-track-info">
                                <p className='app-track-recent'>Recent: Apr. 19, 2024</p>
                                <p className='app-track-frequency'>Sent: 22 Applications</p>
                            </div>
                        </div>
                        <p className='visual-placeholder'>Visualization of how many times user applied to the company</p>
                        <p className='app-track-status'>Offered: 1 &nbsp; &nbsp; Rejected: 21 &nbsp; &nbsp; Interviewed: 3</p>
                    </div>
                </div>
            </div>
        </>
    );
}