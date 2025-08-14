import React, { useState } from 'react';
import './CourseReviewsPage.css';
import { courses } from '../../data/courses';
import CourseCard from '../../components/CourseCard/CourseCard';

// Receive onCourseSelect function as a prop
function CourseReviewsPage({ onCourseSelect }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by course name or code (e.g., AE 101)..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="course-list">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            // Pass the onCourseSelect function to each card
            <CourseCard 
              key={course.id} 
              course={course} 
              onCardClick={onCourseSelect} 
            />
          ))
        ) : (
          <p className="no-results-text">No courses found.</p>
        )}
      </div>
    </div>
  );
}

export default CourseReviewsPage;
