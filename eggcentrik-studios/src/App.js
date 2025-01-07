import './App.css';
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
    return (
        <div className="app-container">
            <Header />
            <MainContent />
            <footer className="footer">
                <p>&copy; 2024 Eggcentrik Studios LLC. All rights reserved.</p>
                <p>
                    Follow:
                    <a href="https://www.reddit.com/r/RecoilControlGame/" className="social-link">
                        Reddit
                    </a>
                    {' | '}
                    <a href="https://www.youtube.com/@eggcentrikstudios" className="social-link">
                        YouTube
                    </a>
                    {' | '}
                    <a href="https://x.com/eggcentrik" className="social-link">
                        X (Twitter)
                    </a>
                </p>
            </footer>
        </div>
    );
}


export default App;
