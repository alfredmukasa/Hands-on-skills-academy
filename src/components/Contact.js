import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Full name is required';
        if (!form.email.trim()) e.email = 'Email address is required';
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address';
        if (!form.message.trim()) e.message = 'Please enter your message';
        return e;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setSubmitted(true);
    };

    return (
        <div className="contact-page">
            {/* ── Background Orbs (matching glassmorphic design) ── */}
            <div className="orb orb-indigo" />
            <div className="orb orb-cyan" />

            <div className="contact-inner">
                {/* ── Left: Info ── */}
                <div className="contact-info">
                    <span className="contact-badge">Contact Center</span>
                    <h1 className="contact-title">
                        Get in <span className="text-primary">Touch.</span>
                    </h1>
                    <p className="contact-desc">
                        Connect with Hands On Skills Academy for premium engineering and mining training solutions designed for the future workforce. Our team is ready to help you take the next step.
                    </p>

                    {/* Info items */}
                    <div className="contact-details">
                        <div className="contact-detail-item">
                            <div className="contact-detail-icon glass-panel">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <h4>Our Campus</h4>
                                <p>Witbank, Mpumalanga, South Africa</p>
                            </div>
                        </div>
                        <div className="contact-detail-item">
                            <div className="contact-detail-icon glass-panel">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <div>
                                <h4>Phone Number</h4>
                                <p><a href="tel:+27721918326">+27 72 191 8326</a></p>
                            </div>
                        </div>
                        <div className="contact-detail-item">
                            <div className="contact-detail-icon glass-panel">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <h4>Email Address</h4>
                                <p><a href="mailto:info@handsonacademy.co.za">info@handsonacademy.co.za</a></p>
                            </div>
                        </div>
                        <div className="contact-detail-item">
                            <div className="contact-detail-icon glass-panel">
                                <span className="material-symbols-outlined">schedule</span>
                            </div>
                            <div>
                                <h4>Working Hours</h4>
                                <p>Mon – Fri: 8:00am to 5:00pm</p>
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp CTA */}
                    <a
                        href="https://wa.me/27721918326"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-btn"
                    >
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.82 1.002 3.844 1.53 5.903 1.531h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Chat on WhatsApp
                    </a>
                </div>

                {/* ── Right: Glass Form ── */}
                <div className="contact-form-wrap glass-panel">
                    {submitted ? (
                        <div className="success-state">
                            <div className="success-icon">
                                <span className="material-symbols-outlined">check_circle</span>
                            </div>
                            <h3>Message Sent!</h3>
                            <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                            <button
                                className="btn-primary"
                                style={{ padding: '14px 28px', fontSize: '14px', border: 'none', cursor: 'pointer', display: 'inline-flex', gap: 8, alignItems: 'center', borderRadius: '9999px' }}
                                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form" noValidate>
                            {/* Row 1 */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className={`glass-input${errors.name ? ' input-error' : ''}`}
                                    />
                                    {errors.name && <span className="field-error">{errors.name}</span>}
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className={`glass-input${errors.email ? ' input-error' : ''}`}
                                    />
                                    {errors.email && <span className="field-error">{errors.email}</span>}
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Phone Number <span className="optional">(optional)</span></label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+27 72 191 8326"
                                        className="glass-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <select
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        className="glass-input glass-select"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="mining">Mining Certification Enquiry</option>
                                        <option value="nated">NATED Engineering Training</option>
                                        <option value="matric">Matric Rewrite</option>
                                        <option value="safety">Safety Training</option>
                                        <option value="electrical">Electrical Trade</option>
                                        <option value="corporate">Corporate Partnership</option>
                                        <option value="other">Other Enquiry</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="form-group">
                                <label>Your Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="How can we help you today?"
                                    className={`glass-input glass-textarea${errors.message ? ' input-error' : ''}`}
                                />
                                {errors.message && <span className="field-error">{errors.message}</span>}
                            </div>

                            {/* Submit */}
                            <button type="submit" className="submit-btn">
                                Send Message
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </form>
                    )}

                    {/* Social quick links */}
                    <div className="form-socials">
                        <a href="mailto:info@handsonacademy.co.za" className="form-social-btn glass-panel" aria-label="Email">
                            <span className="material-symbols-outlined">mail</span>
                        </a>
                        <a href="tel:+27721918326" className="form-social-btn glass-panel" aria-label="Phone">
                            <span className="material-symbols-outlined">call</span>
                        </a>
                        <a href="https://wa.me/27721918326" target="_blank" rel="noopener noreferrer" className="form-social-btn glass-panel" aria-label="WhatsApp">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.82 1.002 3.844 1.53 5.903 1.531h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom gradient line as per design */}
            <div className="contact-bottom-line" />
        </div>
    );
};

export default Contact;
