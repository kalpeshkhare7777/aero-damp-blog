import React, { useState, useEffect, useRef } from 'react';
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
  HeartPulse,
  Menu,
  X 
} from 'lucide-react';

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

const MoreDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleItemClick = (page) => {
    window.location.hash = page;
    setIsOpen(false);
  };

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
          <DropdownItem icon={<University size={16} />} label="Faculty Advisors" onClick={() => handleItemClick('facultyAdvisors')} />
          <DropdownItem icon={<FlaskConical size={16} />} label="NPTEL Courses" onClick={() => handleItemClick('nptelCourses')} />
          <DropdownItem icon={<HeartPulse size={16} />} label="Wellness" onClick={() => handleItemClick('mentalHealth')} />
          <DropdownItem icon={<BookOpen size={16} />} label="Handbook" onClick={() => handleItemClick('handbook')} />
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = (hash) => {
    window.location.hash = hash;
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <style>{`
        .navbar {
            background-color: var(--color-surface, #ffffff);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 100;
            width: 100vw;
            left: 50%;
            transform: translateX(-50%);
        }

        .navbar-content-full {
            display: flex;
            align-items: center;
            justify-content: space-between; 
            height: 5rem;
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 2rem; 
            box-sizing: border-box;
            position: relative;
        }

        .logo {
            display: flex;
            align-items: center;
            cursor: pointer;
            flex-shrink: 0;
        }

        .logo-icon {
            height: 3rem;
            width: 3rem;
            object-fit: contain;
        }

        .logo-text {
            margin-left: 0.75rem;
            font-size: 1.25rem;
            font-weight: bold;
            color: var(--color-text, #111);
        }

        .logo-text-light {
            font-weight: 300;
        }

        /* Desktop Nav */
        .nav-links {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .nav-item {
            display: flex;
            align-items: center;
            padding: 0.5rem 0.75rem;
            border-radius: 0.375rem;
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--color-text-muted, #666);
            background: transparent;
            border: none;
            cursor: pointer;
            transition: all 0.2s;
            white-space: nowrap;
            font-family: inherit;
        }

        .nav-item:hover {
            background-color: var(--color-border, #f3f4f6);
            color: var(--color-primary, #3b82f6);
        }

        .nav-item-label {
            margin-left: 0.5rem;
        }

        .dropdown-arrow {
            margin-left: 0.25rem;
            transition: transform 0.2s;
        }
        .dropdown-arrow.is-open {
            transform: rotate(180deg);
        }

        .nav-divider {
            width: 1px;
            height: 24px;
            background-color: var(--color-border, #e5e7eb);
            margin: 0 0.5rem;
        }

        /* Mobile Toggle */
        .mobile-toggle {
            display: none;
            background: none;
            border: none;
            color: var(--color-text, #111);
            cursor: pointer;
            padding: 0.5rem;
        }

        /* Mobile Menu */
        .mobile-menu {
            position: absolute;
            top: 100%;
            right: 1rem;
            width: 250px;
            background-color: var(--color-surface, #fff);
            border: 1px solid var(--color-border, #e5e7eb);
            border-radius: 0.75rem;
            padding: 0.75rem;
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            animation: slideDown 0.3s ease-out;
        }

        .mobile-divider {
            height: 1px;
            background-color: var(--color-border, #e5e7eb);
            margin: 0.5rem 0;
        }

        /* Dropdowns */
        .nav-item-dropdown-container {
            position: relative;
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            right: 0;
            background-color: var(--color-surface, #fff);
            border: 1px solid var(--color-border, #e5e7eb);
            border-radius: 0.5rem;
            padding: 0.5rem;
            width: max-content;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.2s ease-out;
        }

        .dropdown-item {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
            color: var(--color-text-muted, #666);
            background: transparent;
            border: none;
            border-radius: 0.375rem;
            cursor: pointer;
            text-align: left;
            font-family: inherit;
        }

        .dropdown-item:hover {
            background-color: var(--color-border, #f3f4f6);
            color: var(--color-primary, #3b82f6);
        }

        .dropdown-item-label {
            margin-left: 0.75rem;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1200px) {
            .desktop-only {
                display: none !important;
            }
            .mobile-toggle {
                display: block;
            }
        }

        @media (max-width: 480px) {
            .logo-text {
                display: none;
            }
            .mobile-menu {
                width: calc(100vw - 2rem);
                right: 1rem;
            }
        }
      `}</style>

      <div className="navbar-content-full">
        {/* Logo Section (DAMP Logo Image ebong Text) */}
        <div className="logo" onClick={() => navigate('home')}>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="DAMP Logo" className="logo-icon" />
          <span className="logo-text">
            DAMP <span className="logo-text-light">Aerospace</span>
          </span>
        </div>

        {/* Desktop Navigation (Boro screen-er jonno) */}
        <div className="nav-links desktop-only">
          <NavItem icon={<Home size={20} />} label="Home" onClick={() => navigate('home')} />
          <NavItem icon={<Info size={20} />} label="About" onClick={() => navigate('about')} />
          <NavItem icon={<GraduationCap size={20} />} label="Courses" onClick={() => navigate('reviews')} />
          <NavItem icon={<Briefcase size={20} />} label="Projects" onClick={() => navigate('projects')} />
          <NavItem icon={<Briefcase size={20} />} label="Careers" onClick={() => navigate('careers')} />
          <NavItem icon={<Users size={20} />} label="Council" onClick={() => navigate('council')} />
          <NavItem icon={<Link size={20} />} label="Links" onClick={() => navigate('links')} />
          <NavItem icon={<HelpCircle size={20} />} label="FAQ" onClick={() => navigate('faq')} />
          <NavItem icon={<BookOpen size={20} />} label="Handbook" onClick={() => navigate('handbook')} />
          <div className="nav-divider"></div>
          <MoreDropdown />
        </div>

        {/* Mobile Toggle Button (Hamburger menu) */}
        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Dropdown (Choto screen-er jonno) */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <DropdownItem icon={<Home size={18} />} label="Home" onClick={() => navigate('home')} />
            <DropdownItem icon={<Info size={18} />} label="About" onClick={() => navigate('about')} />
            <DropdownItem icon={<GraduationCap size={18} />} label="Courses" onClick={() => navigate('reviews')} />
            <DropdownItem icon={<Briefcase size={18} />} label="Projects" onClick={() => navigate('projects')} />
            <DropdownItem icon={<Briefcase size={18} />} label="Careers" onClick={() => navigate('careers')} />
            <DropdownItem icon={<Users size={18} />} label="Council" onClick={() => navigate('council')} />
            <DropdownItem icon={<Link size={18} />} label="Links" onClick={() => navigate('links')} />
            <DropdownItem icon={<HelpCircle size={18} />} label="FAQ" onClick={() => navigate('faq')} />
            <DropdownItem icon={<BookOpen size={18} />} label="Handbook" onClick={() => navigate('handbook')} />
            <div className="mobile-divider"></div>
            <DropdownItem icon={<University size={18} />} label="Faculty Advisors" onClick={() => navigate('facultyAdvisors')} />
            <DropdownItem icon={<FlaskConical size={18} />} label="NPTEL Courses" onClick={() => navigate('nptelCourses')} />
            <DropdownItem icon={<HeartPulse size={18} />} label="Wellness" onClick={() => navigate('mentalHealth')} />
          </div>
        )}
      </div>
    </nav>
  );
}