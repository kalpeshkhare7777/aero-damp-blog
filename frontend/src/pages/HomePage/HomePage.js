import React from 'react';
import './HomePage.css';
// Import the video file directly from its new location
import backgroundVideo from './bgvid.mp4';

function HomePage() {
    return (
        <div className="home-container">
            {/* The video element now uses the imported video variable as its source */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="background-video"
                // Use the imported video as the source
                src={backgroundVideo}
            >
                Your browser does not support the video tag.
            </video>

            {/* The overlay ensures text readability */}
            <div className="video-overlay"></div>

            {/* The content that appears over the video */}
            <div className="home-content">
                <h1 className="home-title">DAMP Aerospace</h1>
                <p className="home-subtitle">
                    Welcome to the digital gateway of the Aerospace Engineering department at IIT Bombay. This platform is your central resource for the Department of Aerospace and Motivational Programme (DAMP), designed to connect students with enriching projects, comprehensive course reviews, and our dedicated council.
                </p>
                <button className="button button-primary">
                    Explore Programs
                </button>
            </div>
        </div>
    );
}

export default HomePage;
