import React from 'react';
// Reusing the same CSS as InternshipsPage
import '../InternshipsPage/InternshipsPage.css'; 
import { researchExperiences } from '../../data/research';
import ResearchCard from '../../components/ResearchCard/ResearchCard';

function ResearchPage({ onResearchSelect }) {
  return (
    <div className="animate-fade-in">
      <h1 className="page-main-title">Research Experiences</h1>
      <div className="internships-grid">
        {researchExperiences.map(experience => (
          <ResearchCard 
            key={experience.id} 
            experience={experience} 
            onCardClick={onResearchSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default ResearchPage;
