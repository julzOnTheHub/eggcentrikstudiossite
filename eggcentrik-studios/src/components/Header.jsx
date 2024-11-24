import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <img src={`${process.env.PUBLIC_URL}/images/EarlyLogo2.png`} alt="Eggcentrik Studios Logo" />
        </header>
    );
};

export default Header;