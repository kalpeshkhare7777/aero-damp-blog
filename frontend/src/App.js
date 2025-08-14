import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import CourseReviewsPage from './pages/CourseReviewsPage/CourseReviewsPage';
import CourseDetailPage from './pages/CourseDetailPage/CourseDetailPage';
import ProjectReviewsPage from './pages/ProjectReviewsPage/ProjectReviewsPage';
import ProjectDetailPage from './pages/ProjectDetailPage/ProjectDetailPage';
import CouncilPage from './pages/CouncilPage/CouncilPage';
import FAQPage from './pages/FAQPage/FAQPage'; // Import new page

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setCurrentPage('courseDetail');
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setCurrentPage('projectDetail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'reviews':
        return <CourseReviewsPage onCourseSelect={handleCourseSelect} />;
      case 'courseDetail':
        return <CourseDetailPage course={selectedCourse} onBackClick={() => setCurrentPage('reviews')} />;
      case 'projects':
        return <ProjectReviewsPage onProjectSelect={handleProjectSelect} />;
      case 'projectDetail':
        return <ProjectDetailPage project={selectedProject} onBackClick={() => setCurrentPage('projects')} />;
      case 'council':
        return <CouncilPage />;
      case 'faq': // Add case for FAQ page
        return <FAQPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-container">
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="main-content container">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
