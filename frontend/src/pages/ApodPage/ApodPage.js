import React, { useState, useEffect } from 'react';
import './ApodPage.css';
import { ArrowLeft } from 'lucide-react';

// NASA APOD (Astronomy Picture of the Day) API Endpoint
const API_KEY = 'DEMO_KEY'; // Using NASA's demo key
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

function ApodPage({ onBackClick }) {
    const [apodData, setApodData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApodData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch data from NASA API');
                }
                const data = await response.json();
                setApodData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchApodData();
    }, []);

    return (
        <div className="apod-page-container animate-fade-in">
             <button onClick={onBackClick} className="back-button">
                <ArrowLeft size={18} /> Back to Home
            </button>

            {isLoading && <div className="loading-spinner"></div>}
            
            {error && <div className="error-message">
                <h2>Could Not Load Image</h2>
                <p>{error}</p>
            </div>}

            {apodData && (
                <div className="apod-content">
                    <h1 className="apod-title">{apodData.title}</h1>
                    <div className="image-container">
                        <img 
                            src={apodData.media_type === 'image' ? apodData.hdurl || apodData.url : apodData.thumbnail_url} 
                            alt={apodData.title} 
                            className="apod-image" 
                        />
                         {apodData.copyright && <p className="apod-copyright">Image Credit & Copyright: {apodData.copyright}</p>}
                    </div>
                    <p className="apod-explanation">{apodData.explanation}</p>
                </div>
            )}
        </div>
    );
}

export default ApodPage;
