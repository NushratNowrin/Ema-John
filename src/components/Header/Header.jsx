import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#order">Order</a></li>
                    <li><a href="#Order-Review">Order Review</a></li>
                    <li><a href="#Manage-Invebtory">Manage Invebtory</a></li>
                    <li><a href="#Login">Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;