import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const ABOUT_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXATHoodsQBA138a5GHU-7SbWxgwxXwfqiH3D1CruEzMwawq7MalaciShwcCVbNPRhCSbAZkTQBC9G6e97JjAQRMWCFEdeNGzyZEXAdlLo3l2A3iXNZ3v0MeDzHdK4j44-Rjv-chzwZ0dnHPhQf9CY8eZw3V5Hcucvoz3RRHwuCaGZz83IBYE-uUGlWsSnSwbax8O0LOVYhec94MPM94-s8uoCm2Vyk8qkW4-iBKEu1EOfZiXW53YAEcgqw0dwTDmcG9uV3nRKMuWU';

const offers = [
    { icon: 'construction', title: 'Mining Equipment Training', desc: 'Hands-on instruction for underground and surface mining equipment and safety protocols.' },
    { icon: 'memory', title: 'NATED Engineering Diplomas', desc: 'N1–N6 qualifications in Mechanical, Electrical, and Civil Engineering streams.' },
    { icon: 'health_and_safety', title: 'Safety & Compliance', desc: 'MHSA and OSHA-aligned safety certifications for high-risk industrial environments.' },
    { icon: 'edit_note', title: 'Matric Rewrite', desc: 'Structured academic support and subject tutoring for adult learners re-entering the education system.' },
    { icon: 'bolt', title: 'Electrical Trade', desc: 'Trade test preparation, 3-phase systems, and industrial wiring for aspiring electricians.' },
    { icon: 'handyman', title: 'Skills Programmes', desc: 'Short QCTO-registered courses in artisanship, plumbing, construction, and more.' },
];

const whyUs = [
    'Nationally accredited with QCTO, SETA, and NAMB',
    'Experienced industry-qualified instructors',
    'Hands-on workshops with real equipment',
    'Flexible scheduling for working professionals',
    'Career placement and industry network support',
    'Affordable payment plans and bursary assistance',
];

const About = () => (
    <div className="about-page">
        {/* ── Page Hero ── */}
        <section className="about-hero">
            <div className="about-hero-glow" />
            <div className="about-hero-inner">
                <div className="about-hero-text">
                    <span className="about-tag">About Us</span>
                    <h1>
                        Empowering Minds.<br />
                        <span className="text-primary">Building Futures.</span>
                    </h1>
                    <p>
                        A trusted institution of learning, growth, and opportunity for students across South Africa. We believe every person deserves a chance to succeed.
                    </p>
                    <div className="about-hero-ctas">
                        <Link to="/courses" className="btn-primary" style={{ padding: '14px 28px', fontSize: '14px' }}>
                            Explore Courses <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                        <Link to="/contact" className="btn-ghost" style={{ padding: '14px 28px', fontSize: '14px' }}>
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Hero image */}
                <div className="about-hero-img-wrap glass-card">
                    <img src={ABOUT_IMG} alt="Students training at Hands On Skills Academy" className="about-hero-img" />
                    <div className="about-hero-img-overlay" />
                    {/* Floating badge */}
                    <div className="about-float-badge glass-pill">
                        <span className="material-symbols-outlined">workspace_premium</span>
                        <span>Nationally Accredited</span>
                    </div>
                </div>
            </div>
        </section>

        {/* ── Story / Intro ── */}
        <section className="section about-intro">
            <div className="about-intro-inner">
                <div className="about-intro-text">
                    <div className="section-tag">Our Story</div>
                    <h2>Witbank's Premier<br /><span className="text-primary">Skills Academy</span></h2>
                    <p>
                        Hands On Skills Academy — trading as Hands On Skills Academy Witbank (PTY) LTD — was founded on a simple belief: quality education should be accessible to everyone, regardless of their background.
                    </p>
                    <p>
                        Located in the heart of Witbank, Mpumalanga — South Africa's mining capital — we are uniquely positioned to provide the technical skills that industry demands. Our programmes combine rigorous theory with the practical, hands-on experience employers look for.
                    </p>

                    {/* Stats */}
                    <div className="about-stats">
                        {[
                            { num: '500+', label: 'Graduates' },
                            { num: '10+', label: 'Years Experience' },
                            { num: '5', label: 'Accredited Programmes' },
                            { num: '95%', label: 'Employment Rate' },
                        ].map(s => (
                            <div key={s.label} className="about-stat glass-card">
                                <span className="about-stat-num">{s.num}</span>
                                <span className="about-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission / Vision cards */}
                <div className="mv-stack">
                    <div className="mv-card glass-card">
                        <div className="mv-icon">
                            <span className="material-symbols-outlined">my_location</span>
                        </div>
                        <h3>Our Mission</h3>
                        <p>To provide accessible, nationally accredited vocational training that equips individuals with the practical skills needed to thrive in South Africa's mining and engineering sectors.</p>
                    </div>
                    <div className="mv-card glass-card">
                        <div className="mv-icon">
                            <span className="material-symbols-outlined">visibility</span>
                        </div>
                        <h3>Our Vision</h3>
                        <p>To be the leading skills development institution in Mpumalanga, bridging the skills gap between industry demand and community opportunity — one graduate at a time.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* ── What We Offer ── */}
        <section className="section offer-section">
            <div className="section-label">Our Programmes</div>
            <h2 className="section-title" style={{ marginBottom: 12 }}>What We <span className="text-primary">Offer</span></h2>
            <p className="offer-sub">Six nationally accredited programme tracks designed to meet real industry needs.</p>
            <div className="offer-grid">
                {offers.map(o => (
                    <div key={o.title} className="offer-card glass-card">
                        <div className="offer-icon">
                            <span className="material-symbols-outlined">{o.icon}</span>
                        </div>
                        <h4>{o.title}</h4>
                        <p>{o.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="section why-section">
            <div className="why-inner">
                <div className="why-text">
                    <div className="section-label">Why Us</div>
                    <h2 className="section-title">Why <span className="text-primary">Choose Us?</span></h2>
                    <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.7, marginBottom: 24 }}>
                        We've been empowering students in Mpumalanga for over a decade. Here's what sets us apart from the rest.
                    </p>
                    <Link to="/contact" className="btn-primary" style={{ padding: '14px 28px', fontSize: '14px', display: 'inline-flex' }}>
                        Book a Consultation <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
                <ul className="why-list">
                    {whyUs.map((item, i) => (
                        <li key={i} className="why-item glass-card">
                            <div className="why-num">{String(i + 1).padStart(2, '0')}</div>
                            <span>{item}</span>
                            <span className="material-symbols-outlined why-check">check_circle</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

        {/* ── CTA ── */}
        <section className="about-cta">
            <div className="about-cta-glow" />
            <h2>Ready to join our community?</h2>
            <p>Take the first step toward a nationally recognised qualification today.</p>
            <Link to="/enroll" className="btn-primary" style={{ padding: '18px 48px', fontSize: '18px', fontWeight: 900, display: 'inline-flex', gap: 10 }}>
                Enroll Now <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
        </section>
    </div>
);

export default About;
