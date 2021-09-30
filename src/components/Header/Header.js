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
            <nav>
                <div className="link">
                    <NavLink activeStyle={{ color: '#ce3b5d' }} style={linkStyle} to="/home">Home</NavLink>
                </div>
                <div className="link">
                    <NavLink activeStyle={{ color: '#ce3b5d' }} style={linkStyle} to="/foods">Foods</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;