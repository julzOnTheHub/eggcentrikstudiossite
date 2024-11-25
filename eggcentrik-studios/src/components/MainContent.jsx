import React from 'react';
import './MainContent.css';
import backgroundImage from '../assets/images/game-title-background.png';

function MainContent() {
    return (
        <main className="main-content">
            <h1 className="welcome-title">welcome to the studio</h1>
            <div className="hero">
                <img src={backgroundImage} alt="Game Title Background" className="hero-image" />
            </div>
        </main>
    );
}

export default MainContent;
