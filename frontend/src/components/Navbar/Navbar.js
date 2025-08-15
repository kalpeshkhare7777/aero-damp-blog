import React, { useState, useEffect, useRef } from 'react';
import { Home, Info, Mail, Rocket, BookOpen, Layers, Users, HelpCircle, HeartHandshake, UserCheck, Tv2, MoreVertical } from 'lucide-react';
import './Navbar.css';

// Reusable Navigation Item Component
function NavItem({ icon, label, onClick }) {
    return (
        <button onClick={onClick} className="nav-item">
            {icon}
            <span className="nav-item-label">{label}</span>
        </button>
    );
}

// Dropdown Menu for "More" options
function MoreDropdown({ setCurrentPage }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // This function handles clicks on the menu items
    const handleLinkClick = (page) => {
        setCurrentPage(page);
        setIsOpen(false); // Close the menu after a selection is made
    };

    // This effect handles clicks outside of the dropdown to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        // Add event listener when the dropdown is open
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        // Cleanup the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div 
            className="nav-item-dropdown-container"
            ref={dropdownRef}
        >
            {/* This button now toggles the menu on click */}
            <button onClick={() => setIsOpen(!isOpen)} className="nav-item">
                <MoreVertical size={20} />
            </button>
            {isOpen && (
                <div className="dropdown-menu dropdown-menu-right">
                    <button onClick={() => handleLinkClick('facultyAdvisors')} className="dropdown-item">
                        <UserCheck size={16} className="dropdown-item-icon" />
                        <span>Faculty Advisors</span>
                    </button>
                    <button onClick={() => handleLinkClick('nptelCourses')} className="dropdown-item">
                        <Tv2 size={16} className="dropdown-item-icon" />
                        <span>NPTEL Courses</span>
                    </button>
                    <button onClick={() => handleLinkClick('mentalHealth')} className="dropdown-item">
                        <HeartHandshake size={16} className="dropdown-item-icon" />
                        <span>Wellness</span>
                    </button>
                </div>
            )}
        </div>
    );
}

function Navbar({ setCurrentPage }) {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="logo">
                     <Rocket className="logo-icon" />
                     <span className="logo-text">
                        DAMP <span className="logo-text-light">Aerospace</span>
                     </span>
                </div>

                <div className="nav-links">
                    <NavItem icon={<Home size={18}/>} label="Home" onClick={() => setCurrentPage('home')} />
                    <NavItem icon={<Info size={18}/>} label="About" onClick={() => setCurrentPage('about')} />
                    <NavItem icon={<BookOpen size={18}/>} label="Courses" onClick={() => setCurrentPage('reviews')} />
                    <NavItem icon={<Layers size={18}/>} label="Projects" onClick={() => setCurrentPage('projects')} />
                    <NavItem icon={<Users size={18}/>} label="Council" onClick={() => setCurrentPage('council')} />
                    <NavItem icon={<HelpCircle size={18}/>} label="FAQ" onClick={() => setCurrentPage('faq')} />
                    <NavItem icon={<Mail size={18}/>} label="Contact" onClick={() => setCurrentPage('contact')} />
                    <div className="nav-divider"></div>
                    <MoreDropdown setCurrentPage={setCurrentPage} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
