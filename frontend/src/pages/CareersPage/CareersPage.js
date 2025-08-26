import React from 'react';
import './CareersPage.css';
import CareerCard from '../../components/CareerCard/CareerCard';

function CareersPage({ setCurrentPage }) {
  return (
    <div className="animate-fade-in">
      <h1 className="page-main-title">Career Paths</h1>
      <p className="page-intro-text">
        Explore the various career opportunities and pathways available to you after your B.Tech in Aerospace Engineering.
      </p>
      <div className="careers-grid">
        <CareerCard
          icon="🎓"
          title="Internships"
          description="Gain industry experience and apply your knowledge in real-world settings."
          onClick={() => setCurrentPage('internships')}
        />
        <CareerCard
          icon="💼"
          title="Jobs"
          description="Discover full-time roles in core aerospace, tech, finance, and consulting."
          onClick={() => setCurrentPage('jobs')}
        />
        <CareerCard
          icon="🔬"
          title="Research"
          description="Contribute to cutting-edge advancements in aerospace technology and science."
          onClick={() => setCurrentPage('research')}
        />
        <CareerCard
          icon="📚"
          title="Masters & Higher Studies"
          description="Pursue specialized knowledge and advanced degrees at top universities worldwide."
          onClick={() => setCurrentPage('masters')}
        />
      </div>
    </div>
  );
}

export default CareersPage;
