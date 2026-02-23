import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

// Real image URLs from Stitch design file
const MINING_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAJQT4csdH-Lzm8HslKbOW69AFTvnyihxarNSYfRREcWZJ0NlTV9CYwPuZMBH3P4XYqQQvzOXMrpcKbrP_BEUG32-TLVqw1-vp0lA4PMn2agVJRA32jzjub7jhgoBcb3ocvusx0l9hVYCaeoo3i6t78or2oniEvQHa9nG5MukqJsnOlakcvsS2alanIQWHdq6LLDJSz5JR36HqAmx9jV_jY7HbZ9MRyDMjOAwak335d8SDQP7zu3ZC9YXm8UxLDjgqGYFwrvO8l-5w';
const NATED_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ1c7EYfb2jWt8qjECUyHfg33_reqim-OXLFSOFIsOFIrLM11d0aZwGl1y_if1cjgTwZtYP1UqX5-yzixWJQms0aGHbG5ybu2WFpiTnyDGjSJP-pJ_GGC8xiiLeWVux-jqbabi0yIFlNc9a0TqDHbJ9xS830xxQwPtvOlSgQa0YzJ2tB0TJLfGbvbgi0BCoFNDXRGku6YFHmf0FmroWg1mrj-oZ4BWt0hJj6kCtPwV7Dwwd31QQ-hA8tbw0oZp3vpIndCCbwFaoFup';

const courses = [
  {
    id: 1,
    tag: 'Specialized',
    tagColor: 'gold',
    title: 'Mining Skills',
    duration: '12 Months',
    level: 'NQF Level 4',
    image: MINING_IMG,
    desc: 'Comprehensive technical training focused on underground operations, safety protocols, and heavy machinery mastery aligned with MHSA standards.',
    modules: [
      'Advanced Underground Excavation Techniques',
      'Occupational Health & Global Safety Standards',
      'Heavy Earthmoving Machinery (HEM) Operations',
    ],
    price: 'R12,500',
  },
  {
    id: 2,
    tag: 'Accredited',
    tagColor: 'blue',
    title: 'NATED Engineering',
    duration: '24 Months',
    level: 'NQF Level 6',
    image: NATED_IMG,
    desc: 'Our flagship engineering program combining theoretical depth with immersive industry placement opportunities. N1–N6 qualifications available.',
    modules: [
      'Integrated Theory & Practical Workshop Sessions',
      'International Industry Placement Support',
      'Specialized Mechanical & Electrical Streams',
    ],
    price: 'R18,200',
  },
];

const smallCourses = [
  {
    icon: 'verified_user',
    title: 'Safety Training',
    desc: 'Critical safety certifications for high-risk industrial environments.',
    tags: ['OSHA Aligned', 'HazMat'],
  },
  {
    icon: 'bolt',
    title: 'Electrical Trade',
    desc: 'Master electrical systems from residential wiring to heavy industrial grids.',
    tags: ['3-Phase Systems', 'Trade Test Prep'],
  },
  {
    icon: 'edit_note',
    title: 'Matric Rewrite',
    desc: 'A second chance at excellence. Upgrade your results with expert tutoring and structured support.',
    tags: ['Flexible Schedule', 'All Subjects'],
  },
  {
    icon: 'handyman',
    title: 'Skills Programmes',
    desc: 'Short courses in artisanship, construction, and trade — recognised across South Africa.',
    tags: ['Short Courses', 'QCTO Registered'],
  },
];

const Courses = () => (
  <div className="courses-page">
    {/* ── Sidebar + Main layout ── */}
    <div className="courses-layout">
      {/* Ambient glows */}
      <div className="ambient-glow-top" />
      <div className="ambient-glow-right" />

      {/* Sidebar */}
      <aside className="courses-sidebar glass-panel">
        <h3 className="sidebar-label">Course Categories</h3>
        <nav className="sidebar-nav">
          {[
            { icon: 'construction', label: 'Mining Skills', active: true },
            { icon: 'memory', label: 'NATED Engineering' },
            { icon: 'bolt', label: 'Electrical Trade' },
            { icon: 'health_and_safety', label: 'Safety Training' },
            { icon: 'edit_note', label: 'Matric Rewrite' },
            { icon: 'handyman', label: 'Skills Programmes' },
          ].map(item => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase().replace(/ /g, '-')}`}
              className={`sidebar-link${item.active ? ' sidebar-active' : ''}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Intake notice */}
        <div className="sidebar-intake">
          <p className="intake-label">Upcoming Intake</p>
          <p className="intake-period">2025 Q2 Enrolment</p>
          <p className="intake-sub">Limited seats available for on-site training sessions.</p>
        </div>
      </aside>

      {/* Main content */}
      <main className="courses-main">
        {/* Page header */}
        <div className="courses-header">
          <div className="courses-header-label">
            <span className="material-symbols-outlined">explore</span>
            <span>Mining &amp; Engineering Faculty</span>
          </div>
          <h1 className="courses-title">
            Course <span className="text-primary">Catalog</span>
          </h1>
          <p className="courses-sub">
            Industry-accredited certifications designed for the future of resource extraction and infrastructure development.
          </p>
        </div>

        {/* ── Large Course Cards ── */}
        <div className="course-cards">
          {courses.map(course => (
            <div key={course.id} className="course-card glass-card" id={course.title.toLowerCase().replace(/ /g, '-')}>
              {/* Image panel */}
              <div className="course-img-panel">
                <div className="course-img-overlay" />
                <img src={course.image} alt={course.title} className="course-img" />
                <div className="course-img-caption">
                  <span className={`course-tag-badge tag-${course.tagColor}`}>{course.tag}</span>
                  <h2 className="course-img-title">{course.title}</h2>
                </div>
              </div>

              {/* Detail panel */}
              <div className="course-detail">
                {/* Meta */}
                <div className="course-meta">
                  <div className="course-meta-item">
                    <span className="material-symbols-outlined">schedule</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="course-meta-item">
                    <span className="material-symbols-outlined">workspace_premium</span>
                    <span>{course.level}</span>
                  </div>
                </div>

                <p className="course-desc">{course.desc}</p>

                {/* Modules */}
                <ul className="course-modules">
                  {course.modules.map(m => (
                    <li key={m} className="course-module-item">
                      <span className="material-symbols-outlined">check_circle</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="course-footer">
                  <div className="course-price">
                    <p className="price-label">Starting from</p>
                    <p className="price-amount">{course.price} <span>/ semester</span></p>
                  </div>
                  <Link to="/enroll" className="btn-primary enroll-btn">
                    Enroll Now
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Small Course Cards Grid ── */}
        <div className="small-courses-grid">
          {smallCourses.map(c => (
            <div key={c.title} className="small-course-card glass-card" id={c.title.toLowerCase().replace(/ /g, '-')}>
              <div className="small-course-icon">
                <span className="material-symbols-outlined">{c.icon}</span>
              </div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
              <div className="small-course-tags">
                {c.tags.map(t => (
                  <span key={t} className="small-tag glass-pill">{t}</span>
                ))}
              </div>
              <Link to="/enroll" className="small-course-link">
                Enroll Online <span className="material-symbols-outlined">east</span>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>

    {/* ── CTA Section ── */}
    <section className="courses-cta">
      <div className="courses-cta-glow" />
      <h2>Ready to start your journey?</h2>
      <p>Contact our admissions team and take the first step toward a nationally accredited qualification.</p>
      <Link to="/enroll" className="btn-primary courses-cta-btn">
        Enroll Now
        <span className="material-symbols-outlined">arrow_forward</span>
      </Link>
    </section>
  </div>
);

export default Courses;