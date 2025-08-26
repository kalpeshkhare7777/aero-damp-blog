import React from 'react';
import './InternshipCard.css';

function InternshipCard({ experience, onCardClick }) {
  return (
    <div className="internship-card" onClick={() => onCardClick(experience)}>
      <img src={experience.photoUrl} alt={`Photo of ${experience.name}`} className="internship-photo" />
      <div className="internship-summary">
        <h3 className="internship-name">{experience.name}</h3>
        <p className="internship-detail">{experience.company} | {experience.profile}</p>
        <span className="internship-year">{experience.year}</span>
      </div>
    </div>
  );
}

export default InternshipCard;
