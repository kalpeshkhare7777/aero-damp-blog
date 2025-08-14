import React from 'react';
import './ProjectCard.css';
import { Layers } from 'lucide-react';

// Reusable card for displaying a single project
function ProjectCard({ project, onCardClick }) {
  return (
    <div className="project-card" onClick={() => onCardClick(project)}>
      <div className="project-card-icon">
        <Layers size={32} />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{project.name}</h3>
        <p className="project-card-description">{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
