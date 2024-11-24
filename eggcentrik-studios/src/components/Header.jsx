import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <img className="logo" src={`${process.env.PUBLIC_URL}/images/EarlyLogo2.png`} alt="Logo" />
        </header>
    );
};

export default Header;