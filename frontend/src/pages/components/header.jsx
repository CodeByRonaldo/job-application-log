import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

export default function Header() {
    return (
        <header>
            <nav className='nav-bar'>
                <div className="nav-bar-left">
                    <form className='search-form'>
                        <div className="search">
                            <input
                            type="text"
                            className='search-input'
                            placeholder='Search...' />
                        </div>
                    </form>
                </div>
                <div className="nav-bar-right">
                        <Link to='/home' className='nav-link'>Home</Link>
                        <Link to='/new-app-record' className='nav-link'>New Application</Link>
                        <Link to='/profile' className='nav-link'>Profile</Link>
                </div>
            </nav>
        </header>
    );
};