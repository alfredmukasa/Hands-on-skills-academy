import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import './AdminEnrollments.css';

const ALL_ENROLLMENTS = [
    { id: 1, name: 'Thabo Mokoena', initials: 'TM', av: 'av-1', course: 'Mining Excellence', phone: '074 123 4567', email: 'thabo@mail.com', date: 'Feb 22, 2026', status: 'pending', message: 'I am eager to gain hands-on mining skills and advance my career in the mining sector.' },
    { id: 2, name: 'Sarah Khumalo', initials: 'SK', av: 'av-2', course: 'NATED Engineering', phone: '083 234 5678', email: 'sarah@mail.com', date: 'Feb 22, 2026', status: 'approved', message: 'I want to pursue the N1-N6 Mechanical Engineering diploma to qualify as an artisan.' },
    { id: 3, name: 'Mike Dlamini', initials: 'MD', av: 'av-3', course: 'Matric Rewrite', phone: '061 345 6789', email: 'mike@mail.com', date: 'Feb 21, 2026', status: 'approved', message: 'I failed Math and English in Grade 12. I would like to rewrite to qualify for university.' },
    { id: 4, name: 'Linda Nkosi', initials: 'LN', av: 'av-4', course: 'Safety Training', phone: '078 456 7890', email: 'linda@mail.com', date: 'Feb 21, 2026', status: 'rejected', message: 'I need the safety certification for my current workplace. Urgently required.' },
    { id: 5, name: 'Ayesha Fakude', initials: 'AF', av: 'av-5', course: 'Electrical Trade', phone: '082 567 8901', email: 'ayesha@mail.com', date: 'Feb 20, 2026', status: 'pending', message: 'Very interested in the electrical installations programme to become a licensed electrician.' },
    { id: 6, name: 'James Sithole', initials: 'JS', av: 'av-1', course: 'Mining Excellence', phone: '073 678 9012', email: 'james@mail.com', date: 'Feb 20, 2026', status: 'pending', message: 'I have 2 years of surface mining experience and want to formalise my qualifications.' },
    { id: 7, name: 'Priya Naidoo', initials: 'PN', av: 'av-3', course: 'Matric Rewrite', phone: '079 789 0123', email: 'priya@mail.com', date: 'Feb 19, 2026', status: 'approved', message: 'Looking to upgrade my Maths result to apply for nursing college.' },
    { id: 8, name: 'Bongani Zwane', initials: 'BZ', av: 'av-2', course: 'NATED Engineering', phone: '064 890 1234', email: 'bongani@mail.com', date: 'Feb 19, 2026', status: 'pending', message: 'I want to study N3-N6 Civil Engineering as a pathway to become a civil technician.' },
];

const STATUS_MAP = {
    all: 'All',
    pending: 'Pending',
    approved: 'Approved',
    rejected: 'Rejected',
};

const AdminEnrollments = () => {
    const [search, setSearch] = useState('');
    const [statusFilter, setStatus] = useState('all');
    const [courseFilter, setCourse] = useState('all');
    const [selected, setSelected] = useState(null);
    const [notes, setNotes] = useState('');
    const [enrollments, setEnrollments] = useState(ALL_ENROLLMENTS);

    const filtered = enrollments.filter(e => {
        const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) ||
            e.course.toLowerCase().includes(search.toLowerCase());
        const matchStatus = statusFilter === 'all' || e.status === statusFilter;
        const matchCourse = courseFilter === 'all' || e.course === courseFilter;
        return matchSearch && matchStatus && matchCourse;
    });

    const courses = [...new Set(ALL_ENROLLMENTS.map(e => e.course))];

    const updateStatus = (id, newStatus) => {
        setEnrollments(prev => prev.map(e => e.id === id ? { ...e, status: newStatus } : e));
        if (selected?.id === id) setSelected(prev => ({ ...prev, status: newStatus }));
    };

    return (
        <AdminLayout pageTitle="Enrollments" pageSubtitle={`${filtered.length} total enrollment submissions`}>
            <div className="admin-card" style={{ marginBottom: 0 }}>
                {/* Header */}
                <div className="page-header" style={{ padding: '20px 20px 0' }}>
                    <div className="page-header-text">
                        <h2>Enrollment Submissions</h2>
                        <p>Review, approve, or reject student enrollment applications.</p>
                    </div>
                    <div className="page-header-actions">
                        <button className="action-btn action-btn-view" style={{ padding: '10px 18px' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: 16, marginRight: 6 }}>download</span>
                            Export CSV
                        </button>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="filter-bar">
                    <div className="filter-search">
                        <span className="material-symbols-outlined">search</span>
                        <input
                            type="text"
                            className="filter-input"
                            placeholder="Search by name or course…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>

                    {/* Status tabs */}
                    <div className="filter-tab-group">
                        {Object.entries(STATUS_MAP).map(([key, label]) => (
                            <button
                                key={key}
                                className={`filter-tab${statusFilter === key ? ' active' : ''}`}
                                onClick={() => setStatus(key)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Course dropdown */}
                    <select className="filter-select" value={courseFilter} onChange={e => setCourse(e.target.value)}>
                        <option value="all">All Courses</option>
                        {courses.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                {/* Table */}
                {filtered.length === 0 ? (
                    <div className="empty-state">
                        <div><span className="material-symbols-outlined">search_off</span></div>
                        <p>No enrollments match your filters.</p>
                    </div>
                ) : (
                    <div className="admin-table-wrap">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Student</th>
                                    <th>Course Applied</th>
                                    <th>Contact</th>
                                    <th>Date Applied</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map(e => (
                                    <tr key={e.id} onClick={() => { setSelected(e); setNotes(''); }}>
                                        <td>
                                            <div className="cell-with-avatar">
                                                <div className={`admin-avatar ${e.av}`}>{e.initials}</div>
                                                <div>
                                                    <div className="cell-primary">{e.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span style={{ fontSize: 13, color: '#94a3b8' }}>{e.course}</span></td>
                                        <td>
                                            <div className="cell-secondary">{e.phone}</div>
                                            <div className="cell-secondary">{e.email}</div>
                                        </td>
                                        <td style={{ color: '#64748b', fontSize: 12 }}>{e.date}</td>
                                        <td>
                                            <span className={`badge badge-${e.status}`}>
                                                <span className="badge-dot" />
                                                {e.status.charAt(0).toUpperCase() + e.status.slice(1)}
                                            </span>
                                        </td>
                                        <td onClick={ev => ev.stopPropagation()}>
                                            <div className="action-btns">
                                                <button className="action-btn action-btn-view" onClick={() => { setSelected(e); setNotes(''); }}>View</button>
                                                {e.status === 'pending' && (
                                                    <>
                                                        <button className="action-btn action-btn-approve" onClick={() => updateStatus(e.id, 'approved')}>Approve</button>
                                                        <button className="action-btn action-btn-reject" onClick={() => updateStatus(e.id, 'rejected')}>Reject</button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Pagination */}
                <div className="pagination">
                    <span className="pagination-info">Showing {filtered.length} of {enrollments.length} enrollments</span>
                    <div className="pagination-btns">
                        <button className="page-btn"><span className="material-symbols-outlined">chevron_left</span></button>
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn"><span className="material-symbols-outlined">chevron_right</span></button>
                    </div>
                </div>
            </div>

            {/* Detail Panel */}
            {selected && (
                <>
                    <div className="panel-backdrop" onClick={() => setSelected(null)} />
                    <div className="detail-panel">
                        <div className="detail-panel-header">
                            <h3>Enrollment Detail</h3>
                            <button className="detail-panel-close" onClick={() => setSelected(null)}>
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="detail-panel-body">
                            {/* Student card */}
                            <div className="detail-student-card">
                                <div className={`admin-avatar ${selected.av}`}>{selected.initials}</div>
                                <div>
                                    <div className="detail-student-name">{selected.name}</div>
                                    <div className="detail-student-meta">{selected.course}</div>
                                    <div style={{ marginTop: 6 }}>
                                        <span className={`badge badge-${selected.status}`}>
                                            <span className="badge-dot" />
                                            {selected.status.charAt(0).toUpperCase() + selected.status.slice(1)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Contact info */}
                            <div className="detail-section">
                                <div className="detail-section-label">Contact Information</div>
                                <div className="detail-row"><span className="detail-row-label">Phone</span><span className="detail-row-value">{selected.phone}</span></div>
                                <div className="detail-row"><span className="detail-row-label">Email</span><span className="detail-row-value">{selected.email}</span></div>
                                <div className="detail-row"><span className="detail-row-label">Applied</span><span className="detail-row-value">{selected.date}</span></div>
                            </div>

                            {/* Message */}
                            <div className="detail-section">
                                <div className="detail-section-label">Application Message</div>
                                <div style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6, padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
                                    {selected.message}
                                </div>
                            </div>

                            {/* Admin notes */}
                            <div className="detail-section">
                                <div className="detail-section-label">Admin Notes</div>
                                <textarea
                                    className="detail-notes-textarea"
                                    rows={4}
                                    placeholder="Add internal notes about this application…"
                                    value={notes}
                                    onChange={e => setNotes(e.target.value)}
                                />
                            </div>

                            {/* Actions */}
                            {selected.status === 'pending' && (
                                <div className="detail-actions">
                                    <button
                                        className="action-btn action-btn-approve"
                                        onClick={() => updateStatus(selected.id, 'approved')}
                                    >
                                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>check_circle</span>
                                        Approve
                                    </button>
                                    <button
                                        className="action-btn action-btn-reject"
                                        onClick={() => updateStatus(selected.id, 'rejected')}
                                    >
                                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>cancel</span>
                                        Reject
                                    </button>
                                </div>
                            )}
                            {selected.status !== 'pending' && (
                                <div style={{ marginTop: 20, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, fontSize: 12, color: '#64748b', textAlign: 'center' }}>
                                    This application has been <strong style={{ color: selected.status === 'approved' ? '#22c55e' : '#ef4444' }}>{selected.status}</strong>.
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </AdminLayout>
    );
};

export default AdminEnrollments;
