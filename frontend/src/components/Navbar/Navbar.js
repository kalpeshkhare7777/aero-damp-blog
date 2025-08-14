import React from 'react';
import { Home, Info, Mail, Rocket, BookOpen, Layers, Users, HelpCircle } from 'lucide-react'; // Add HelpCircle icon
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
                    {/* <NavItem icon={<Mail size={18}/>} label="Contact" onClick={() => setCurrentPage('contact')} /> */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
