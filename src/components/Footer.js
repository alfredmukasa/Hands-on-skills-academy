import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo/ChatGPT Image Feb 22, 2026, 08_33_28 PM.png';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        {/* Bottom gradient bar */}
        <div className="footer-glow" />
        <div className="footer-inner">
            {/* Logo & tagline */}
            <div className="footer-brand">
                <div className="footer-logo">
                    <img src={logo} alt="Hands On Skills Academy" className="footer-logo-img" />
                </div>
                <p className="footer-tagline">
                    Hands On Skills Academy Witbank (PTY) LTD — nationally accredited training programmes for engineering and mining excellence.
                </p>
                <div className="footer-socials">
                    <a href="https://facebook.com" className="social-btn glass-pill" aria-label="Facebook">f</a>
                    <a href="https://wa.me/27721918326" className="social-btn glass-pill" aria-label="WhatsApp">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.82 1.002 3.844 1.53 5.903 1.531h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    </a>
                    <a href="https://instagram.com" className="social-btn glass-pill" aria-label="Instagram">ig</a>
                </div>
            </div>

            {/* Links */}
            <div className="footer-col">
                <h4>Courses</h4>
                <ul>
                    <li><Link to="/courses">Mining Equipment Training</Link></li>
                    <li><Link to="/courses">Matric Rewrite</Link></li>
                    <li><Link to="/courses">NATED Engineering</Link></li>
                    <li><Link to="/courses">Safety Training</Link></li>
                    <li><Link to="/courses">Skills Programmes</Link></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>Academy</h4>
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/enroll">Enroll Online</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="#accreditations">Accreditations</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
                <h4>Keep In Touch</h4>
                <ul className="footer-contact-list">
                    <li>
                        <span className="material-symbols-outlined">call</span>
                        <a href="tel:+27721918326">+27 72 191 8326</a>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">mail</span>
                        <a href="mailto:info@handsonacademy.co.za">info@handsonacademy.co.za</a>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">location_on</span>
                        <span>Witbank, Mpumalanga, SA</span>
                    </li>
                </ul>
            </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
            <p>© 2025 <span>Hands On Skills Academy</span> — Hands On Skills Academy Witbank (PTY) LTD. All rights reserved.</p>
            <span className="accred-badge">Nationally Accredited ✓</span>
        </div>
    </footer>
);

export default Footer;
