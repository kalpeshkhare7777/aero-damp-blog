import React, { useState, useEffect } from 'react';
import './ApodPage.css';
import { ArrowLeft, Loader2, AlertTriangle } from 'lucide-react';

// Helper function to get last year's date in YYYY-MM-DD format
const getLastYearsDate = () => {
  const today = new Date();
  today.setFullYear(today.getFullYear() - 1);
  
  const year = today.getFullYear();
  // getMonth() is 0-indexed, so we add 1
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
};

// Use your provided API key
const API_KEY = 'EsHDb7VCgIKIAgdgcY12VC6wBQtHMuc9ngOMSYoQ'; 

function ApodPage({ onBackClick }) {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApod = async () => {
      setLoading(true);
      try {
        // Get the date string for last year
        const date = getLastYearsDate();
        
        // Add the date parameter and your API key to the URL
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApodData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApod();
  }, []); // Empty dependency array means this runs once on mount

  const renderContent = () => {
    if (loading) {
      return (
        <div className="apod-loading">
          <Loader2 size={48} className="animate-spin" />
          <p>Fetching image from one year ago today...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="apod-error">
          <AlertTriangle size={48} />
          <p>Could not fetch data. {error}</p>
        </div>
      );
    }

    if (apodData) {
      return (
        <>
          <h1 className="apod-title">{apodData.title}</h1>
          <p className="apod-date">From: {apodData.date}</p>
          
          {apodData.media_type === 'image' ? (
            <img src={apodData.hdurl || apodData.url} alt={apodData.title} className="apod-image" />
          ) : (
            <iframe
              src={apodData.url}
              title={apodData.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="apod-video"
            ></iframe>
          )}
          
          <div className="apod-explanation">
            <h3>Explanation</h3>
            <p>{apodData.explanation}</p>
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <div className="apod-page animate-fade-in">
      <button onClick={onBackClick} className="back-button">
        <ArrowLeft size={18} /> Back to Home
      </button>
      {renderContent()}
    </div>
  );
}

export default ApodPage;

