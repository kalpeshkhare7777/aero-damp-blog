import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page-container animate-fade-in">
      <h1 className="page-main-title">About DAMP & Aerospace Engineering</h1>

      {/* --- Message from the HoD --- */}
      <div className="hod-message-card">
        <p className="hod-text">
          "The Department of Aerospace Engineering extends a warm welcome to all of you. 
          Thank you for choosing Aerospace Engineering at IIT Bombay. Aerospace engineering 
          is indeed a multi-disciplinary department offering exciting opportunities for 
          learning. The department offers a carefully curated curriculum developed 
          keeping in mind the needs of the aerospace industry and research labs of the country."
        </p>
        <div className="hod-signature">
          <strong>Prof. AM Pradeep</strong>
          <span>Head of Department, Aerospace Engineering</span>
        </div>
      </div>

      {/* --- Welcome to the Department --- */}
      <div className="welcome-section">
        <h2 className="section-title">Welcome to the Department</h2>
        
        <div className="welcome-content">
          <div className="welcome-text">
            <p>
              Our curriculum offers the perfect mix of core and elective courses, 
              enabling you to build a strong foundation in aerospace engineering 
              while developing expertise in your chosen specialization.
            </p>
          </div>

          <div className="welcome-text">
            <p>
              You will have numerous opportunities to apply theory to practice 
              through exploratory projects (SLPs) and detailed B.Tech Projects (BTPs). 
              These projects provide a unique perspective for carrying out research 
              in cutting-edge areas of aerospace.
            </p>
          </div>

          <div className="welcome-text">
            <p>
              You are part of a diverse batch of students from across the country, 
              which provides incredible networking opportunities. We strongly 
              encourage you to make the best use of this. A judicious mix of 
              academics and co-curricular activities is essential for your 
              overall personality development.
            </p>
          </div>
        </div>

        <p className="closing-message">
          We wish you all the best and are hopeful that you will make the most 
          of your stay at the institute!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
