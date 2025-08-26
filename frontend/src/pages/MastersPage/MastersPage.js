import React from 'react';
// Reusing the same CSS as InternshipsPage
import '../InternshipsPage/InternshipsPage.css'; 
import { mastersExperiences } from '../../data/masters';
import MastersCard from '../../components/MastersCard/MastersCard';

function MastersPage({ onMastersSelect }) {
  return (
    <div className="animate-fade-in">
      <h1 className="page-main-title">Higher Studies Experiences</h1>
      <div className="internships-grid">
        {mastersExperiences.map(experience => (
          <MastersCard 
            key={experience.id} 
            experience={experience} 
            onCardClick={onMastersSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default MastersPage;
