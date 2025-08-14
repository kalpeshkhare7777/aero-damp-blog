import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="page-card animate-fade-in">
            <h1 className="page-title-large">DAMP Aerospace</h1>
            <p className="page-subtitle">
                Welcome to the digital gateway of the Aerospace Engineering department at IIT Bombay. This platform is your central resource for the Department Academic Mentorship Programme (DAMP), designed to connect students with enriching projects, comprehensive course reviews, and our dedicated council.
            </p>
            <button className="button button-primary">
                Explore Programs
            </button>
        </div>
    );
}

export default HomePage;
