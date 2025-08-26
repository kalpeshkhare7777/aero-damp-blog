import React from 'react';
// Reusing the same CSS as InternshipsPage
import '../InternshipsPage/InternshipsPage.css'; 
import { jobs } from '../../data/jobs';
import JobCard from '../../components/JobCard/JobCard';

function JobsPage({ onJobSelect }) {
  return (
    <div className="animate-fade-in">
      <h1 className="page-main-title">Job Experiences</h1>
      <div className="internships-grid">
        {jobs.map(experience => (
          <JobCard 
            key={experience.id} 
            experience={experience} 
            onCardClick={onJobSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default JobsPage;
