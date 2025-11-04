import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { 
  Home, 
  Info, 
  GraduationCap, 
  Briefcase, 
  Users, 
  HelpCircle, 
  Link, 
  MoreHorizontal, 
  ChevronDown, 
  BookOpen,
  University, 
  FlaskConical, 
  HeartPulse 
} from 'lucide-react';

// Rocket icon (re-using from DAMP logo idea)
const LogoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="logo-icon"
  >
    <path d="M5.13 5.13 18.87 18.87" />
    <path d="M13 3 3 13" />
    <path d="M17.8 17.8 21 21" />
    <path d="M3 21h18" />
    <path d="M12.35 12.35 15 15" />
    <path d="M21 3s-3.5 3.5-7 7" />
    <path d="m11 11-4.03 4.03" />
  </svg>
);


const NavItem = ({ icon, label, onClick, hasDropdown, isOpen }) => (
  <button onClick={onClick} className="nav-item">
    {icon}
    <span className="nav-item-label">{label}</span>
    {hasDropdown && <ChevronDown size={16} className={`dropdown-arrow ${isOpen ? 'is-open' : ''}`} />}
  </button>
);

const DropdownItem = ({ icon, label, onClick }) => (
  <button onClick={onClick} className="dropdown-item">
    {icon}
    <span className="dropdown-item-label">{label}</span>
  </button>
);

// This component no longer needs setCurrentPage
const MoreDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  // Updated handler to set hash
  const handleItemClick = (page) => {
    window.location.hash = page;
    setIsOpen(false);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);


  return (
    <div className="nav-item-dropdown-container" ref={dropdownRef}>
      <NavItem 
        icon={<MoreHorizontal size={20} />} 
        label="More"
        onClick={toggleDropdown}
        hasDropdown
        isOpen={isOpen}
      />

      {isOpen && (
        <div className="dropdown-menu dropdown-menu-right">
          <DropdownItem 
            icon={<University size={16} />} 
            label="Faculty Advisors" 
            onClick={() => handleItemClick('facultyAdvisors')} 
          />
          <DropdownItem 
            icon={<FlaskConical size={16} />} 
            label="NPTEL Courses" 
            onClick={() => handleItemClick('nptelCourses')} 
          />
          <DropdownItem 
            icon={<HeartPulse size={16} />} 
            label="Wellness" 
            onClick={() => handleItemClick('mentalHealth')} 
          />
        </div>
      )}
    </div>
  );
};

// This component no longer needs setCurrentPage
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content-full">
        {/* Updated handlers to set hash */}
        <div className="logo" onClick={() => window.location.hash = 'home'}>
          <LogoIcon />
          <span className="logo-text">
            DAMP <span className="logo-text-light">Aerospace</span>
          </span>
        </div>
        <div className="nav-links">
          <NavItem icon={<Home size={20} />} label="Home" onClick={() => window.location.hash = 'home'} />
          <NavItem icon={<Info size={20} />} label="About" onClick={() => window.location.hash = 'about'} />
          <NavItem icon={<GraduationCap size={20} />} label="Courses" onClick={() => window.location.hash = 'reviews'} />
          <NavItem icon={<Briefcase size={20} />} label="Projects" onClick={() => window.location.hash = 'projects'} />
          <NavItem icon={<Briefcase size={20} />} label="Careers" onClick={() => window.location.hash = 'careers'} />
          <NavItem icon={<Users size={20} />} label="Council" onClick={() => window.location.hash = 'council'} />
          <NavItem icon={<Link size={20} />} label="Links" onClick={() => window.location.hash = 'links'} />
          <NavItem icon={<HelpCircle size={20} />} label="FAQ" onClick={() => window.location.hash = 'faq'} />
          <NavItem icon={<BookOpen size={20} />} label="Handbook" onClick={() => window.location.hash = 'handbook'} />
          
          <div className="nav-divider"></div>

          <MoreDropdown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
