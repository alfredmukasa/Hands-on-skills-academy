import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const MINING_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAJQT4csdH-Lzm8HslKbOW69AFTvnyihxarNSYfRREcWZJ0NlTV9CYwPuZMBH3P4XYqQQvzOXMrpcKbrP_BEUG32-TLVqw1-vp0lA4PMn2agVJRA32jzjub7jhgoBcb3ocvusx0l9hVYCaeoo3i6t78or2oniEvQHa9nG5MukqJsnOlakcvsS2alanIQWHdq6LLDJSz5JR36HqAmx9jV_jY7HbZ9MRyDMjOAwak335d8SDQP7zu3ZC9YXm8UxLDjgqGYFwrvO8l-5w';
const NATED_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ1c7EYfb2jWt8qjECUyHfg33_reqim-OXLFSOFIsOFIrLM11d0aZwGl1y_if1cjgTwZtYP1UqX5-yzixWJQms0aGHbG5ybu2WFpiTnyDGjSJP-pJ_GGC8xiiLeWVux-jqbabi0yIFlNc9a0TqDHbJ9xS830xxQwPtvOlSgQa0YzJ2tB0TJLfGbvbgi0BCoFNDXRGku6YFHmf0FmroWg1mrj-oZ4BWt0hJj6kCtPwV7Dwwd31QQ-hA8tbw0oZp3vpIndCCbwFaoFup';

const faqs = [
  {
    q: 'What courses does Hands On Skills Academy offer?',
    a: 'We offer Mining Equipment Training, NATED Engineering Diplomas, Matric Rewrite, Skills & Safety Programmes, and Electrical Trade courses — all nationally accredited.',
  },
  {
    q: 'Are the programmes nationally accredited?',
    a: 'Yes. All our programmes are accredited with QCTO, SETA, and NAMB, ensuring your qualification is recognised across South Africa and internationally.',
  },
  {
    q: 'How do I enroll?',
    a: 'Simply visit our Contact page, fill in the enquiry form, and our admissions team will contact you within 24 hours with all the next steps.',
  },
  {
    q: 'Do you offer financial assistance?',
    a: 'We work with various bursary providers and SETA funding opportunities. Contact us to discuss the options available for your chosen programme.',
  },
];

const testimonials = [
  { name: 'Thabo M.', quote: 'HANDS ON SKILLS changed my career path completely!' },
  { name: 'Sarah K.', quote: 'Best mining training in Mpumalanga — period.' },
  { name: 'Mike D.', quote: 'Got my NATED diploma in record time!' },
  { name: 'Linda N.', quote: 'Highly professional instructors. Loved every session.' },
  { name: 'James P.', quote: 'The hands-on approach made everything click.' },
  { name: 'Ayesha F.', quote: 'Nationally accredited — my employer was impressed!' },
];

// doubled for seamless loop
const marqueeItems = [...testimonials, ...testimonials];

const Homepage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="homepage">
      {/* ── Hero Section ── */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-inner hero-split">

          {/* ── LEFT: Copy ── */}
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="pulse-dot" />
              <span>Admissions Open 2025</span>
            </div>

            <h1 className="hero-h1">
              Level Up <br />
              <em className="text-primary">Your Skill.</em>
            </h1>

            <p className="hero-sub">
              Nationally accredited engineering and mining training powered by
              hands-on expertise. Master real-world skills in a structured,
              industry-standard environment.
            </p>

            {/* CTAs */}
            <div className="hero-ctas">
              <Link to="/courses" className="btn-primary hero-btn-primary">
                Explore Courses
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link to="/enroll" className="btn-ghost hero-btn-ghost">
                Enroll Now
              </Link>
            </div>

            {/* Inline stats strip */}
            <div className="hero-stats-strip">
              {[
                { num: '500+', label: 'Graduates' },
                { num: '95%', label: 'Success Rate' },
                { num: '10+', label: 'Years' },
                { num: '5', label: 'Programmes' },
              ].map((s, i) => (
                <React.Fragment key={s.label}>
                  <div className="hero-stat-item">
                    <span className="hero-stat-num">{s.num}</span>
                    <span className="hero-stat-label">{s.label}</span>
                  </div>
                  {i < 3 && <div className="hero-stat-divider" />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Excavator Image ── */}
          <div className="hero-media">
            <div className="hero-media-frame">
              <img
                src={MINING_IMG}
                alt="Heavy excavator mining equipment training"
                className="hero-excavator-img"
              />
              {/* Cinematic overlay */}
              <div className="hero-media-overlay" />

              {/* Video-play button */}
              <button
                className="hero-play-btn"
                aria-label="Watch training video"
                onClick={() => window.open('https://wa.me/27721918326', '_blank')}
              >
                <span className="hero-play-icon material-symbols-outlined">play_arrow</span>
                <span className="hero-play-label">See Our Training</span>
              </button>

              {/* Floating chip — top left */}
              <div className="hero-media-chip chip-accred">
                <span className="material-symbols-outlined">workspace_premium</span>
                NQF Accredited
              </div>

              {/* Floating chip — bottom right */}
              <div className="hero-media-chip chip-industry">
                <span className="material-symbols-outlined">sensors</span>
                Industry Standard
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ── Bento Course Grid ── */}
      <section className="section bento-section">
        <div className="bento-header">
          <div>
            <h2 className="bento-title">
              Our <span className="text-primary">Courses</span>
            </h2>
            <p className="bento-sub">
              Industry-accredited certifications designed for the future of resource extraction and infrastructure development.
            </p>
          </div>
          <Link to="/courses" className="btn-ghost" style={{ padding: '16px 28px', whiteSpace: 'nowrap' }}>
            View All Courses
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="bento-grid">
          {/* Large card — Mining (with real photo) */}
          <div
            className="bento-card bento-large glass-card"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(11,15,25,0.95) 0%, rgba(11,15,25,0.3) 60%), url(${MINING_IMG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="bento-overlay" />
            <div className="bento-content">
              <span className="bento-tag">Industry Leader</span>
              <h3>Mining Excellence</h3>
              <p>Master surface and underground mining with hands-on training and safety protocols aligned to MHSA standards.</p>
              <div className="bento-pills">
                <span className="glass-pill bento-pill">Rock Breaking</span>
                <span className="glass-pill bento-pill">Mine Health &amp; Safety</span>
                <span className="glass-pill bento-pill">Simulations</span>
              </div>
            </div>
          </div>

          {/* Medium card — NATED (with real photo) */}
          <div
            className="bento-card bento-medium glass-card"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(11,15,25,0.85) 0%, rgba(11,15,25,0.55) 100%), url(${NATED_IMG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="bento-card-top">
              <div>
                <span className="bento-tag">Accredited</span>
                <h3>NATED Engineering</h3>
              </div>
              <span className="material-symbols-outlined bento-icon-float">settings_suggest</span>
            </div>
            <p className="bento-p">N1–N6 Mechanical, Electrical &amp; Civil engineering with theory and workshop sessions.</p>
            <Link to="/courses" className="bento-link">
              Explore Programme
              <span className="material-symbols-outlined">east</span>
            </Link>
          </div>

          {/* Small — Matric */}
          <div className="bento-card bento-small glass-card">
            <div className="bento-small-icon">
              <span className="material-symbols-outlined">edit_note</span>
            </div>
            <h3>Matric Rewrite</h3>
            <p>A second chance at excellence. Upgrade your results with expert tutoring and structured academic support.</p>
          </div>

          {/* Small — Safety */}
          <div className="bento-card bento-small glass-card">
            <div className="bento-small-icon">
              <span className="material-symbols-outlined">health_and_safety</span>
            </div>
            <h3>Safety Training</h3>
            <p>OSHA-aligned safety certifications for high-risk industrial environments. Get certified fast.</p>
          </div>
        </div>
      </section>

      {/* ── Testimonial Marquee ── */}
      <section className="marquee-section">
        <p className="marquee-label">Trusted by over 500+ Students across Mpumalanga</p>
        <div className="marquee-container">
          <div className="marquee-track">
            {marqueeItems.map((t, i) => (
              <div key={i} className="marquee-item glass-pill">
                <div className="marquee-star">
                  <span className="material-symbols-outlined">star</span>
                </div>
                <p className="marquee-text">
                  "{t.quote}" — <span className="text-primary">{t.name}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="section features-section">
        <div className="section-label">Why Choose Us</div>
        <h2 className="section-title">Built for <span className="text-primary">Real Results</span></h2>
        <div className="features-grid">
          {[
            {
              icon: 'psychology',
              title: 'Hands-On Training',
              desc: 'Practical, industry-standard workshops where you learn by doing — not just watching.',
            },
            {
              icon: 'supervisor_account',
              title: 'Expert Mentorship',
              desc: 'Direct guidance from industry veterans with decades of experience in mining and engineering.',
            },
            {
              icon: 'workspace_premium',
              title: 'Nationally Accredited',
              desc: 'QCTO, SETA &amp; NAMB accredited qualifications recognised by employers across South Africa.',
            },
          ].map(f => (
            <div key={f.title} className="feature-card glass-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">{f.icon}</span>
              </div>
              <h3>{f.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: f.desc }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section faq-section">
        <div className="faq-inner">
          <div>
            <div className="section-label">FAQ</div>
            <h2 className="section-title" style={{ maxWidth: 400 }}>
              Common <span className="text-primary">Questions</span>
            </h2>
          </div>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`faq-item glass-card${openFaq === i ? ' open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-q">
                  <span>{item.q}</span>
                  <span className="material-symbols-outlined faq-arrow">
                    {openFaq === i ? 'remove' : 'add'}
                  </span>
                </div>
                {openFaq === i && <p className="faq-a">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-section">
        <div className="cta-glow" />
        <h2>Ready to transform your career?</h2>
        <p>Join the next cohort of South Africa's world-class engineers and miners.</p>
        <Link to="/enroll" className="btn-primary cta-btn">
          Enroll Now
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </section>
    </div>
  );
};

export default Homepage;