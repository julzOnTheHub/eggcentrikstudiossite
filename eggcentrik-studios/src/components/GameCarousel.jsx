import React, { useState, useEffect } from 'react';
import './GameCarousel.css';

function GameCarousel() {
    const screenshots = [
        `${process.env.PUBLIC_URL}/images/screenshots/screenshot1.png`,
        `${process.env.PUBLIC_URL}/images/screenshots/screenshot2.png`,
        `${process.env.PUBLIC_URL}/images/screenshots/screenshot3.png`,
        `${process.env.PUBLIC_URL}/images/screenshots/screenshot4.png`,
        `${process.env.PUBLIC_URL}/images/screenshots/screenshot5.png`,
        `${process.env.PUBLIC_URL}/images/screenshots/screenshot6.png`,
        `${process.env.PUBLIC_URL}/images/screenshots/screenshot7.png`,
        `${process.env.PUBLIC_URL}/images/screenshots/screenshot8.png`,
        `${process.env.PUBLIC_URL}/images/screenshots/screenshot9.png`,
        `${process.env.PUBLIC_URL}/images/screenshots/screenshot10.png`,
    ];

    const extendedScreenshots = [
        screenshots[screenshots.length - 1], // Add the last image at the beginning
        ...screenshots,
        screenshots[0], // Add the first image at the end
    ];

    const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real image
    const [isAnimating, setIsAnimating] = useState(false);

    const slideDuration = 500; // Duration of the sliding transition in ms

    // Automatically cycle through images
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5500); // Change every 5.5 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    // Reset position when reaching cloned slides
    useEffect(() => {
        if (currentIndex === 0) {
            // After the animation ends, jump to the real last slide
            setTimeout(() => {
                setIsAnimating(false);
                setCurrentIndex(screenshots.length);
            }, slideDuration);
        } else if (currentIndex === extendedScreenshots.length - 1) {
            // After the animation ends, jump to the real first slide
            setTimeout(() => {
                setIsAnimating(false);
                setCurrentIndex(1);
            }, slideDuration);
        } else {
            setTimeout(() => setIsAnimating(false), slideDuration);
        }
    }, [currentIndex, extendedScreenshots.length, screenshots.length]);

    return (
        <div className="carousel-container">
            <div
                className="carousel-slides"
                style={{
                    transform: `translateX(calc(-100% * ${currentIndex}))`,
                    transition: isAnimating ? `transform ${slideDuration}ms ease-in-out` : 'none',
                }}
            >
                {extendedScreenshots.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Screenshot ${index + 1}`}
                        className="carousel-image"
                    />
                ))}
            </div>
            <div className="carousel-dots">
                {screenshots.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index + 1 === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index + 1)}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default GameCarousel;