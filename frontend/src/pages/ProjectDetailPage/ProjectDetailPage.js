import React from 'react';
// Note: We can reuse the same CSS as CourseDetailPage for consistency
import '../CourseDetailPage/CourseDetailPage.css'; 

function ProjectDetailPage({ project, onBackClick }) {
  if (!project) {
    return (
      <div className="page-card animate-fade-in">
        <h1 className="page-title">Project Not Found</h1>
        <p className="page-text">Please go back and select a project.</p>
        <button onClick={onBackClick} className="button button-secondary">
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="course-detail-container animate-fade-in">
      <button onClick={onBackClick} className="back-button">
        &larr; Back to All Projects
      </button>
      <h1 className="course-detail-title">{project.name}</h1>
      <p className="course-detail-description">{project.description}</p>
      
      <div className="reviews-section">
        <h2 className="reviews-title">Reviews</h2>
        <div className="review-placeholder">
          <p>No reviews yet for this project.</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
