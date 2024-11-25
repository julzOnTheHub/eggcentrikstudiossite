import React from 'react';
import './MainContent.css';
import backgroundImage from '../assets/images/game-title-background.png';
import GameCarousel from './GameCarousel';

function MainContent() {
    return (
        <main className="main-content">
            <h1 className="welcome-title">welcome to the studio</h1>
            <div className="hero">
                <img src={backgroundImage} alt="Game Title Background" className="hero-image" />
            </div>
            <GameCarousel />
        </main>
    );
}

export default MainContent;
