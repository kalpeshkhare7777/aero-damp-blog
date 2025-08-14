import React from 'react';
import './ProjectReviewsPage.css';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

function ProjectReviewsPage({ onProjectSelect }) {
  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    (acc[project.category] = acc[project.category] || []).push(project);
    return acc;
  }, {});

  // Define the order of categories
  const categoryOrder = ['SLP', 'BTP', 'DDP', 'SURP', 'Other Projects'];

  return (
    <div className="animate-fade-in">
      <h1 className="page-main-title">Project Reviews</h1>
      {categoryOrder.map(category => (
        groupedProjects[category] && (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="project-list">
              {groupedProjects[category].map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onCardClick={onProjectSelect}
                />
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export default ProjectReviewsPage;
