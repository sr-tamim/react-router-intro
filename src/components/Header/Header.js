import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: '#ff577e'
    }
    return (
        <header>
            <ul>
                <li><NavLink activeStyle={{ color: '#cc577e' }} style={linkStyle} to="/home">Home</NavLink></li>
                <li><NavLink activeStyle={{ color: '#cc577e' }} style={linkStyle} to="/foods">Foods</NavLink></li>
            </ul>
        </header>
    );
};

export default Header;