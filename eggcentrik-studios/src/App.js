import './App.css';
import React from 'react';
import Header from './components/Header';

function App() {
    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <h1 className="welcome-title">welcome to the studio</h1>
                <p className="description">
                    Creator of "Recoil Control: The Adventures of Rico Che (demo)"
                </p>
            </main>
            <footer className="footer">
                <p>&copy; 2024 Eggcentrik Studios LLC. All rights reserved.</p>
                <p>
                    Follow:
                    <a href="https://tiktok.com/@eggcentrikstudios" className="social-link">
                        TikTok
                    </a>
                    {' | '}
                    <a href="https://www.youtube.com/@eggcentrikstudios" className="social-link">
                        YouTube
                    </a>
                </p>
            </footer>
        </div>
    );
}


export default App;
