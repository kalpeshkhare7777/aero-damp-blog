import React from 'react';
import './HomePage.css';
import backgroundVideo from './bgvid.mp4';

function HomePage({ setCurrentPage }) {
    return (
        <div className="home-container">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="background-video"
                src={backgroundVideo}
            >
                Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>

            <div className="home-content">
                <h1 className="home-title">DAMP Aerospace</h1>
                <p className="home-subtitle">
                    Welcome to the digital gateway of the Aerospace Engineering department at IIT Bombay. This platform is your central resource for the Department Academic Mentorship Program (DAMP).
                </p>
                
                {/* Button to navigate to the new APOD page */}
                {/* <button 
                    onClick={() => setCurrentPage('apod')}
                    className="button button-primary apod-button"
                >
                    <span> Astronomy Picture of the Day</span>
                </button> */}
            </div>
        </div>
    );
}

export default HomePage;

