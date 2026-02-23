import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo/ChatGPT Image Feb 22, 2026, 08_33_28 PM.png';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => { setMenuOpen(false); }, [location]);

    const isActive = (path) => location.pathname === path;

    return (
        <div className={`navbar-wrapper${scrolled ? ' scrolled' : ''}`}>
            <header className="navbar-pill glass-card">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Hands On Skills Academy" className="navbar-logo-img" />
                </Link>

                {/* Desktop Nav */}
                <nav className="navbar-links">
                    <Link to="/" className={`nav-link${isActive('/') ? ' active' : ''}`}>Home</Link>
                    <Link to="/courses" className={`nav-link${isActive('/courses') ? ' active' : ''}`}>Courses</Link>
                    <Link to="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`}>About</Link>
                    <Link to="/contact" className={`nav-link${isActive('/contact') ? ' active' : ''}`}>Contact</Link>
                </nav>

                {/* CTA */}
                <div className="navbar-actions">
                    <Link to="/enroll" className="btn-primary navbar-cta">Enroll Now</Link>
                    {/* Hamburger */}
                    <button
                        className={`hamburger${menuOpen ? ' open' : ''}`}
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="mobile-menu glass-card">
                    <Link to="/" className={`mobile-link${isActive('/') ? ' active' : ''}`}>Home</Link>
                    <Link to="/courses" className={`mobile-link${isActive('/courses') ? ' active' : ''}`}>Courses</Link>
                    <Link to="/about" className={`mobile-link${isActive('/about') ? ' active' : ''}`}>About</Link>
                    <Link to="/contact" className={`mobile-link${isActive('/contact') ? ' active' : ''}`}>Contact</Link>
                    <Link to="/enroll" className="btn-primary" style={{ marginTop: '12px', justifyContent: 'center', padding: '12px 24px' }}>Enroll Now</Link>
                </nav>
            )}
        </div>
    );
};

export default Navbar;
