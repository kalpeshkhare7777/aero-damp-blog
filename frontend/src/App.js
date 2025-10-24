import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import CourseReviewsPage from './pages/CourseReviewsPage/CourseReviewsPage';
import CourseDetailPage from './pages/CourseDetailPage/CourseDetailPage';
import ProjectReviewsPage from './pages/ProjectReviewsPage/ProjectReviewsPage';
import ProjectDetailPage from './pages/ProjectDetailPage/ProjectDetailPage';
import CouncilPage from './pages/CouncilPage/CouncilPage';
import FAQPage from './pages/FAQPage/FAQPage';
import MentalHealthPage from './pages/MentalHealthPage/MentalHealthPage';
import FacultyAdvisorsPage from './pages/FacultyAdvisorsPage/FacultyAdvisorsPage';
import NptelCoursesPage from './pages/NptelCoursesPage/NptelCoursesPage';
import CareersPage from './pages/CareersPage/CareersPage';
import InternshipsPage from './pages/InternshipsPage/InternshipsPage';
import InternshipDetailPage from './pages/InternshipDetailPage/InternshipDetailPage';
import JobsPage from './pages/JobsPage/JobsPage';
import JobDetailPage from './pages/JobDetailPage/JobDetailPage';
import ResearchPage from './pages/ResearchPage/ResearchPage';
import ResearchDetailPage from './pages/ResearchDetailPage/ResearchDetailPage';
import MastersPage from './pages/MastersPage/MastersPage';
import MastersDetailPage from './pages/MastersDetailPage/MastersDetailPage';
import LinksPage from './pages/LinksPage/LinksPage';
// import HandbookPage from './pages/HandbookPage/HandbookPage';
import ApodPage from './pages/ApodPage/ApodPage'; // Import the new page

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourseCode, setSelectedCourseCode] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedResearch, setSelectedResearch] = useState(null);
  const [selectedMasters, setSelectedMasters] = useState(null);

  const handleCourseSelect = (courseCode) => {
    setSelectedCourseCode(courseCode);
    setCurrentPage('courseDetail');
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setCurrentPage('projectDetail');
  };

  const handleInternshipSelect = (internship) => {
    setSelectedInternship(internship);
    setCurrentPage('internshipDetail');
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setCurrentPage('jobDetail');
  };

  const handleResearchSelect = (research) => {
    setSelectedResearch(research);
    setCurrentPage('researchDetail');
  };

  const handleMastersSelect = (masters) => {
    setSelectedMasters(masters);
    setCurrentPage('mastersDetail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'reviews':
        return <CourseReviewsPage onCourseSelect={handleCourseSelect} />;
      case 'courseDetail':
        return <CourseDetailPage courseCode={selectedCourseCode} reviews={[]} onBackClick={() => setCurrentPage('reviews')} />;
      case 'projects':
        return <ProjectReviewsPage onProjectSelect={handleProjectSelect} />;
      case 'projectDetail':
        return <ProjectDetailPage project={selectedProject} onBackClick={() => setCurrentPage('projects')} />;
      case 'council':
        return <CouncilPage />;
      case 'faq':
        return <FAQPage />;
      case 'mentalHealth':
        return <MentalHealthPage />;
      case 'facultyAdvisors':
        return <FacultyAdvisorsPage />;
      case 'nptelCourses':
        return <NptelCoursesPage />;
      case 'careers':
        return <CareersPage setCurrentPage={setCurrentPage} />;
      case 'internships':
        return <InternshipsPage onInternshipSelect={handleInternshipSelect} />;
      case 'internshipDetail':
        return <InternshipDetailPage experience={selectedInternship} onBackClick={() => setCurrentPage('internships')} />;
      case 'jobs':
        return <JobsPage onJobSelect={handleJobSelect} />;
      case 'jobDetail':
        return <JobDetailPage experience={selectedJob} onBackClick={() => setCurrentPage('jobs')} />;
      case 'research':
        return <ResearchPage onResearchSelect={handleResearchSelect} />;
      case 'researchDetail':
        return <ResearchDetailPage experience={selectedResearch} onBackClick={() => setCurrentPage('research')} />;
      case 'masters':
        return <MastersPage onMastersSelect={handleMastersSelect} />;
      case 'mastersDetail':
        return <MastersDetailPage experience={selectedMasters} onBackClick={() => setCurrentPage('masters')} />;
      case 'links':
        return <LinksPage />;
      // case 'handbook':
        // return <HandbookPage />;
      case 'apod': // Add case for the new APOD page
        return <ApodPage onBackClick={() => setCurrentPage('home')} />;
      case 'home':
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
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
