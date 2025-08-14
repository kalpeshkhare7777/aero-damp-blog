import React from 'react';
import './CourseDetailPage.css';

function CourseDetailPage({ course, onBackClick }) {
  if (!course) {
    return (
      <div className="page-card animate-fade-in">
        <h1 className="page-title">Course Not Found</h1>
        <p className="page-text">Please go back and select a course.</p>
        <button onClick={onBackClick} className="button button-secondary">
          Back to Reviews
        </button>
      </div>
    );
  }

  return (
    <div className="course-detail-container animate-fade-in">
      <button onClick={onBackClick} className="back-button">
        &larr; Back to All Courses
      </button>
      <h1 className="course-detail-title">{course.code}: {course.name}</h1>
      <p className="course-detail-description">{course.description}</p>
      
      <div className="reviews-section">
        <h2 className="reviews-title">Reviews</h2>
        {/* This is where you would map over and display actual reviews */}
        <div className="review-placeholder">
          <p>No reviews yet. Be the first to leave one!</p>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailPage;
