import React from 'react';
import './InternshipsPage.css';
import { internships } from '../../data/internships';
import InternshipCard from '../../components/InternshipCard/InternshipCard';

function InternshipsPage({ onInternshipSelect }) {
  return (
    <div className="animate-fade-in">
      <h1 className="page-main-title">Internship Experiences</h1>
      <div className="internships-grid">
        {internships.map(experience => (
          <InternshipCard 
            key={experience.id} 
            experience={experience} 
            onCardClick={onInternshipSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default InternshipsPage;
