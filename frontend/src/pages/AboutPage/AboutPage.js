import React from 'react';
import './AboutPage.css';

function AboutPage() {
    return (
        <div className="page-card animate-fade-in">
            <h1 className="page-title">About The Department</h1>
            <p className="page-text">
            The department has 22 full-time faculty members and around 250 students- over 170 undergraduate students and nearly 80 graduate students. In addition, there are around 40 permanent and 20 temporary staff members who run the administrative offices, laboratories, workshop, drawing office, and are involved with sponsored research work undertaken by the faculty. The department runs academic programs for the degrees of Bachelor of Technology (B Tech), Master of Technology (M Tech), Dual Degree (B Tech and M Tech) and Doctor of Philosophy (Ph D). Five broad areas of specialization are offered: Aerodynamics, Control and Guidance, Propulsion, Structures, and Systems Engineering.
            </p>
            <p className="page-text">
            The faculty are actively involved in research in the areas of Experimental Aerodynamics; Flight Dynamics and Control; Nonlinear Systems and Stability; Composite Materials; Structural Dynamics and Aeroelasticity; Gas Turbine Engines and Rotor Dynamics; Axial Compressor Design and Analysis; Combustion and Heat Transfer; RCS and Infrared Signatures; MDO; Aircraft (UAV and Airship) Design.
            </p>
        </div>
    );
}

export default AboutPage;
