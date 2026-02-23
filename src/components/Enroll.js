import React, { useState } from 'react';
import './Enroll.css';

const COURSES = [
    'Mining Equipment & Operations',
    'NATED Engineering – N1 to N6',
    'Electrical Trade Theory',
    'Matric Rewrite (Adult Education)',
    'Safety & Health (SAMTRAC)',
    'Fitting & Turning',
    'Plating & Structural Steel',
    'Occupational Health & Safety',
    'Corporate Skills Programme',
];

const STEP_LABELS = [
    { icon: 'person', label: 'Personal Info' },
    { icon: 'school', label: 'Course' },
    { icon: 'history_edu', label: 'Education' },
    { icon: 'edit_note', label: 'Statement' },
];

const EMPTY_FORM = {
    // Step 1 – Personal
    firstName: '', lastName: '', email: '', phone: '', idNumber: '', dob: '', gender: '',
    address: '', city: '', province: '',
    // Step 2 – Course
    course: '', startDate: '', studyMode: '', howHeard: '',
    // Step 3 – Education
    highestQual: '', institution: '', yearCompleted: '', subjects: '', employed: '', employer: '',
    // Step 4 – Statement
    motivation: '', disabilities: '', emergencyName: '', emergencyPhone: '', agreeTerms: false,
};

const Enroll = () => {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState(EMPTY_FORM);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        const e = {};
        if (step === 0) {
            if (!form.firstName.trim()) e.firstName = 'Required';
            if (!form.lastName.trim()) e.lastName = 'Required';
            if (!form.email.trim()) e.email = 'Required';
            else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
            if (!form.phone.trim()) e.phone = 'Required';
            if (!form.dob) e.dob = 'Required';
            if (!form.gender) e.gender = 'Required';
            if (!form.address.trim()) e.address = 'Required';
            if (!form.city.trim()) e.city = 'Required';
            if (!form.province) e.province = 'Required';
        }
        if (step === 1) {
            if (!form.course) e.course = 'Please select a course';
            if (!form.startDate) e.startDate = 'Please select a start date';
            if (!form.studyMode) e.studyMode = 'Please select a study mode';
        }
        if (step === 2) {
            if (!form.highestQual) e.highestQual = 'Required';
            if (!form.institution.trim()) e.institution = 'Required';
            if (!form.yearCompleted.trim()) e.yearCompleted = 'Required';
        }
        if (step === 3) {
            if (!form.motivation.trim()) e.motivation = 'Please provide your motivation statement';
            if (!form.emergencyName.trim()) e.emergencyName = 'Required';
            if (!form.emergencyPhone.trim()) e.emergencyPhone = 'Required';
            if (!form.agreeTerms) e.agreeTerms = 'You must agree to the terms and conditions';
        }
        return e;
    };

    const next = () => {
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setStep(s => s + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const back = () => {
        setStep(s => s - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setSubmitted(true);
    };

    const Field = ({ name, label, type = 'text', placeholder, required, children, half }) => (
        <div className={`enroll-field${half ? ' half' : ''}`}>
            <label>{label}{required && <span className="enroll-req">*</span>}</label>
            {children || (
                <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className={`enroll-input${errors[name] ? ' err' : ''}`}
                />
            )}
            {errors[name] && <span className="enroll-error">{errors[name]}</span>}
        </div>
    );

    const SelectField = ({ name, label, required, options, placeholder, half }) => (
        <div className={`enroll-field${half ? ' half' : ''}`}>
            <label>{label}{required && <span className="enroll-req">*</span>}</label>
            <select
                name={name}
                value={form[name]}
                onChange={handleChange}
                className={`enroll-input enroll-select${errors[name] ? ' err' : ''}`}
            >
                <option value="">{placeholder || 'Select…'}</option>
                {options.map(o => (
                    <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>
                ))}
            </select>
            {errors[name] && <span className="enroll-error">{errors[name]}</span>}
        </div>
    );

    if (submitted) {
        return (
            <div className="enroll-page">
                <div className="enroll-orb enroll-orb-1" />
                <div className="enroll-orb enroll-orb-2" />
                <div className="enroll-success">
                    <div className="enroll-success-icon">
                        <span className="material-symbols-outlined">task_alt</span>
                    </div>
                    <h2>Application Submitted!</h2>
                    <p>
                        Thank you, <strong>{form.firstName}</strong>! Your enrollment application for
                        <strong> {form.course}</strong> has been received. Our admissions team will
                        contact you at <strong>{form.email}</strong> within 1–2 business days.
                    </p>
                    <div className="enroll-success-ref">
                        Reference: <strong>KA-{Date.now().toString().slice(-6)}</strong>
                    </div>
                    <button
                        className="enroll-btn-primary"
                        onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); setStep(0); }}
                    >
                        <span className="material-symbols-outlined">add_circle</span>
                        Submit Another Application
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="enroll-page">
            <div className="enroll-orb enroll-orb-1" />
            <div className="enroll-orb enroll-orb-2" />

            <div className="enroll-inner">
                {/* ── Page Header ── */}
                <div className="enroll-header">
                    <span className="enroll-badge">
                        <span className="material-symbols-outlined">school</span>
                        Enrollment Application
                    </span>
                    <h1>Start Your <span className="text-primary">Academy Journey</span></h1>
                    <p>
                        Complete the form below to apply for enrollment at Hands On Skills Academy.
                        All fields marked <span className="enroll-req">*</span> are required.
                    </p>
                </div>

                {/* ── Step Indicator ── */}
                <div className="enroll-steps">
                    {STEP_LABELS.map((s, i) => (
                        <div key={i} className={`enroll-step${i === step ? ' active' : ''}${i < step ? ' done' : ''}`}>
                            <div className="enroll-step-dot">
                                {i < step
                                    ? <span className="material-symbols-outlined">check</span>
                                    : <span className="material-symbols-outlined">{s.icon}</span>
                                }
                            </div>
                            <span className="enroll-step-label">{s.label}</span>
                            {i < STEP_LABELS.length - 1 && <div className="enroll-step-line" />}
                        </div>
                    ))}
                </div>

                {/* ── Form Card ── */}
                <div className="enroll-card glass-panel">
                    <form onSubmit={handleSubmit} noValidate>

                        {/* ────────────── STEP 0 – Personal Info ────────────── */}
                        {step === 0 && (
                            <div className="enroll-section">
                                <div className="enroll-section-title">
                                    <span className="material-symbols-outlined">person</span>
                                    Personal Information
                                </div>

                                <div className="enroll-row">
                                    <Field name="firstName" label="First Name" placeholder="John" required half />
                                    <Field name="lastName" label="Last Name" placeholder="Doe" required half />
                                </div>
                                <div className="enroll-row">
                                    <Field name="email" label="Email Address" type="email" placeholder="john@example.com" required half />
                                    <Field name="phone" label="Phone Number" type="tel" placeholder="+27 72 191 8326" required half />
                                </div>
                                <div className="enroll-row">
                                    <Field name="idNumber" label="ID / Passport Number" placeholder="8001015009087" half />
                                    <Field name="dob" label="Date of Birth" type="date" required half />
                                </div>
                                <div className="enroll-row">
                                    <SelectField
                                        name="gender"
                                        label="Gender"
                                        required
                                        half
                                        options={[
                                            { value: 'male', label: 'Male' },
                                            { value: 'female', label: 'Female' },
                                            { value: 'prefer_not', label: 'Prefer not to say' },
                                        ]}
                                    />
                                </div>

                                <div className="enroll-divider" />
                                <div className="enroll-section-title">
                                    <span className="material-symbols-outlined">location_on</span>
                                    Home Address
                                </div>

                                <Field name="address" label="Street Address" placeholder="123 Main Street" required />
                                <div className="enroll-row">
                                    <Field name="city" label="City / Town" placeholder="Witbank" required half />
                                    <SelectField
                                        name="province"
                                        label="Province"
                                        required
                                        half
                                        options={[
                                            'Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal',
                                            'Limpopo', 'Mpumalanga', 'Northern Cape', 'North West', 'Western Cape',
                                        ]}
                                    />
                                </div>
                            </div>
                        )}

                        {/* ────────────── STEP 1 – Course Selection ────────────── */}
                        {step === 1 && (
                            <div className="enroll-section">
                                <div className="enroll-section-title">
                                    <span className="material-symbols-outlined">school</span>
                                    Course Selection
                                </div>

                                {/* Course cards grid */}
                                <div className="enroll-field">
                                    <label>Select Your Course<span className="enroll-req">*</span></label>
                                    <div className="course-grid">
                                        {COURSES.map(c => (
                                            <button
                                                key={c}
                                                type="button"
                                                onClick={() => { setForm(p => ({ ...p, course: c })); if (errors.course) setErrors(p => ({ ...p, course: '' })); }}
                                                className={`course-card${form.course === c ? ' selected' : ''}`}
                                            >
                                                <span className="material-symbols-outlined course-card-icon">
                                                    {c.includes('Mining') ? 'construction' :
                                                        c.includes('NATED') ? 'engineering' :
                                                            c.includes('Electrical') ? 'bolt' :
                                                                c.includes('Matric') ? 'menu_book' :
                                                                    c.includes('Safety') ? 'health_and_safety' :
                                                                        c.includes('Fitting') ? 'settings' :
                                                                            c.includes('Plating') ? 'build' :
                                                                                c.includes('Occupational') ? 'medical_services' :
                                                                                    'workspace_premium'}
                                                </span>
                                                {c}
                                                {form.course === c && (
                                                    <span className="course-card-check material-symbols-outlined">check_circle</span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                    {errors.course && <span className="enroll-error">{errors.course}</span>}
                                </div>

                                <div className="enroll-row">
                                    <Field name="startDate" label="Preferred Start Date" type="date" required half />
                                    <SelectField
                                        name="studyMode"
                                        label="Study Mode"
                                        required
                                        half
                                        options={[
                                            { value: 'full_time', label: 'Full-Time' },
                                            { value: 'part_time', label: 'Part-Time (evenings/weekends)' },
                                            { value: 'online', label: 'Online / Distance Learning' },
                                        ]}
                                    />
                                </div>

                                <SelectField
                                    name="howHeard"
                                    label="How did you hear about us?"
                                    options={[
                                        { value: 'google', label: 'Google / Online Search' },
                                        { value: 'facebook', label: 'Facebook' },
                                        { value: 'whatsapp', label: 'WhatsApp' },
                                        { value: 'friend', label: 'Friend / Family Referral' },
                                        { value: 'employer', label: 'Employer Referral' },
                                        { value: 'radio', label: 'Radio' },
                                        { value: 'signage', label: 'Signage / Billboard' },
                                        { value: 'other', label: 'Other' },
                                    ]}
                                />
                            </div>
                        )}

                        {/* ────────────── STEP 2 – Education & Background ────────────── */}
                        {step === 2 && (
                            <div className="enroll-section">
                                <div className="enroll-section-title">
                                    <span className="material-symbols-outlined">history_edu</span>
                                    Education &amp; Background
                                </div>

                                <div className="enroll-row">
                                    <SelectField
                                        name="highestQual"
                                        label="Highest Qualification"
                                        required
                                        half
                                        options={[
                                            { value: 'grade9', label: 'Grade 9 or below' },
                                            { value: 'grade10', label: 'Grade 10' },
                                            { value: 'grade11', label: 'Grade 11' },
                                            { value: 'grade12', label: 'Grade 12 / Matric' },
                                            { value: 'certificate', label: 'Certificate / Diploma' },
                                            { value: 'degree', label: "Bachelor's Degree or higher" },
                                        ]}
                                    />
                                    <Field name="yearCompleted" label="Year Completed" type="number" placeholder="2020" required half />
                                </div>

                                <Field name="institution" label="Last School / Institution Attended" placeholder="e.g. Witbank Secondary School" required />

                                <div className="enroll-field">
                                    <label>Subjects Passed <span className="optional">(optional)</span></label>
                                    <textarea
                                        name="subjects"
                                        value={form.subjects}
                                        onChange={handleChange}
                                        rows="3"
                                        placeholder="e.g. Mathematics, Physical Science, English…"
                                        className="enroll-input enroll-textarea"
                                    />
                                </div>

                                <div className="enroll-divider" />
                                <div className="enroll-section-title">
                                    <span className="material-symbols-outlined">work</span>
                                    Employment Status
                                </div>

                                <div className="enroll-row">
                                    <SelectField
                                        name="employed"
                                        label="Current Employment Status"
                                        half
                                        options={[
                                            { value: 'employed', label: 'Employed (full-time)' },
                                            { value: 'part_time', label: 'Employed (part-time)' },
                                            { value: 'unemployed', label: 'Unemployed' },
                                            { value: 'self', label: 'Self-Employed' },
                                            { value: 'student', label: 'Student' },
                                        ]}
                                    />
                                    <Field name="employer" label="Employer Name" placeholder="e.g. Anglo American" half />
                                </div>
                            </div>
                        )}

                        {/* ────────────── STEP 3 – Statement & Declaration ────────────── */}
                        {step === 3 && (
                            <div className="enroll-section">
                                <div className="enroll-section-title">
                                    <span className="material-symbols-outlined">edit_note</span>
                                    Motivation Statement
                                </div>

                                <div className="enroll-field">
                                    <label>Why do you want to enroll?<span className="enroll-req">*</span></label>
                                    <textarea
                                        name="motivation"
                                        value={form.motivation}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="Tell us about your goals and why you chose this course…"
                                        className={`enroll-input enroll-textarea${errors.motivation ? ' err' : ''}`}
                                    />
                                    {errors.motivation && <span className="enroll-error">{errors.motivation}</span>}
                                    <span className="char-count">{form.motivation.length} / 1000 characters</span>
                                </div>

                                <div className="enroll-field">
                                    <label>Any disabilities or special requirements? <span className="optional">(optional)</span></label>
                                    <textarea
                                        name="disabilities"
                                        value={form.disabilities}
                                        onChange={handleChange}
                                        rows="2"
                                        placeholder="Let us know so we can make appropriate accommodations…"
                                        className="enroll-input enroll-textarea"
                                    />
                                </div>

                                <div className="enroll-divider" />
                                <div className="enroll-section-title">
                                    <span className="material-symbols-outlined">emergency</span>
                                    Emergency Contact
                                </div>

                                <div className="enroll-row">
                                    <Field name="emergencyName" label="Contact Full Name" placeholder="Jane Doe" required half />
                                    <Field name="emergencyPhone" label="Contact Phone Number" type="tel" placeholder="+27 72 000 0000" required half />
                                </div>

                                <div className="enroll-divider" />

                                {/* Application Summary */}
                                <div className="enroll-summary-box">
                                    <h4><span className="material-symbols-outlined">summarize</span> Application Summary</h4>
                                    <div className="summary-grid">
                                        <div><span>Name</span><strong>{form.firstName} {form.lastName}</strong></div>
                                        <div><span>Email</span><strong>{form.email || '—'}</strong></div>
                                        <div><span>Course</span><strong>{form.course || '—'}</strong></div>
                                        <div><span>Study Mode</span><strong>{form.studyMode ? { full_time: 'Full-Time', part_time: 'Part-Time', online: 'Online' }[form.studyMode] : '—'}</strong></div>
                                        <div><span>Start Date</span><strong>{form.startDate || '—'}</strong></div>
                                        <div><span>Qualification</span><strong>{form.highestQual || '—'}</strong></div>
                                    </div>
                                </div>

                                {/* Terms */}
                                <div className={`enroll-terms${errors.agreeTerms ? ' err' : ''}`}>
                                    <input
                                        type="checkbox"
                                        id="agreeTerms"
                                        name="agreeTerms"
                                        checked={form.agreeTerms}
                                        onChange={handleChange}
                                        className="enroll-checkbox"
                                    />
                                    <label htmlFor="agreeTerms">
                                        I confirm that all information provided is accurate and I agree to Hands On Skills Academy's{' '}
                                        <a href="/contact" className="terms-link">terms and conditions</a> and{' '}
                                        <a href="/contact" className="terms-link">privacy policy</a>.
                                    </label>
                                </div>
                                {errors.agreeTerms && <span className="enroll-error">{errors.agreeTerms}</span>}
                            </div>
                        )}

                        {/* ── Navigation Buttons ── */}
                        <div className="enroll-nav">
                            {step > 0 && (
                                <button type="button" className="enroll-btn-back" onClick={back}>
                                    <span className="material-symbols-outlined">arrow_back</span>
                                    Back
                                </button>
                            )}
                            <div className="enroll-nav-right">
                                <span className="enroll-nav-step">Step {step + 1} of {STEP_LABELS.length}</span>
                                {step < STEP_LABELS.length - 1 ? (
                                    <button type="button" className="enroll-btn-primary" onClick={next}>
                                        Continue
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                ) : (
                                    <button type="submit" className="enroll-btn-primary enroll-btn-submit">
                                        <span className="material-symbols-outlined">send</span>
                                        Submit Application
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>

                {/* ── Side info strip ── */}
                <div className="enroll-aside">
                    <div className="enroll-aside-card glass-panel">
                        <span className="material-symbols-outlined enroll-aside-icon">support_agent</span>
                        <h4>Need help applying?</h4>
                        <p>Our admissions team is available Mon–Fri, 8am–5pm.</p>
                        <a href="tel:+27721918326" className="enroll-aside-link">
                            <span className="material-symbols-outlined">call</span>+27 72 191 8326
                        </a>
                        <a href="https://wa.me/27721918326" className="enroll-aside-link enroll-aside-wa" target="_blank" rel="noopener noreferrer">
                            <span className="material-symbols-outlined">chat</span>Chat on WhatsApp
                        </a>
                    </div>
                    <div className="enroll-aside-card glass-panel">
                        <span className="material-symbols-outlined enroll-aside-icon">verified</span>
                        <h4>Nationally Accredited</h4>
                        <p>All Hands On Skills Academy programmes are QCTO / MERSETA / SETA accredited and SAQA registered.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enroll;
