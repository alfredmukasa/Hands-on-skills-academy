import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import './AdminAppointments.css';

const COURSES = ['Mining Excellence', 'NATED Engineering', 'Matric Rewrite', 'Safety Training', 'Electrical Trade'];
const APPT_TYPES = ['Consultation', 'Campus Tour', 'Enrollment Interview', 'Financial Enquiry'];

const INIT_APPTS = [
    { id: 1, name: 'Thabo Mokoena', initials: 'TM', av: 'av-1', course: 'Mining Excellence', type: 'Enrollment Interview', date: '2026-02-23', time: '09:00', duration: '30 min', status: 'confirmed', phone: '074 123 4567', notes: 'First-time applicant. Has 2 years surface mining experience.' },
    { id: 2, name: 'Emily Dube', initials: 'ED', av: 'av-2', course: 'NATED Engineering', type: 'Campus Tour', date: '2026-02-23', time: '10:30', duration: '45 min', status: 'confirmed', phone: '083 234 5678', notes: 'Wants to see the workshop facilities before enrolling.' },
    { id: 3, name: 'Mike Sithole', initials: 'MS', av: 'av-3', course: 'Safety Training', type: 'Consultation', date: '2026-02-25', time: '14:00', duration: '30 min', status: 'pending', phone: '061 345 6789', notes: 'Employer sponsored. Needs to discuss SETA funding options.' },
    { id: 4, name: 'Priya Naidoo', initials: 'PN', av: 'av-4', course: 'Matric Rewrite', type: 'Consultation', date: '2026-02-26', time: '15:00', duration: '30 min', status: 'confirmed', phone: '078 456 7890', notes: 'Wants to rewrite Maths and English. Requires study plan guidance.' },
    { id: 5, name: 'James Sithole', initials: 'JS', av: 'av-5', course: 'Electrical Trade', type: 'Enrollment Interview', date: '2026-02-27', time: '11:00', duration: '30 min', status: 'pending', phone: '082 567 8901', notes: 'Referred by former graduate. Very keen to start in March.' },
    { id: 6, name: 'Ayesha Fakude', initials: 'AF', av: 'av-1', course: 'Mining Excellence', type: 'Financial Enquiry', date: '2026-02-28', time: '09:30', duration: '20 min', status: 'cancelled', phone: '073 678 9012', notes: 'Called to cancel — rescheduling for March.' },
];

const DAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const buildCalendar = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = Array(firstDay).fill(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    return cells;
};

const AdminAppointments = () => {
    const now = new Date();
    const [calYear, setCalYear] = useState(now.getFullYear());
    const [calMonth, setCalMonth] = useState(now.getMonth());
    const [selected, setSelected] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [toast, setToast] = useState('');
    const [appts, setAppts] = useState(INIT_APPTS);
    const [newAppt, setNewAppt] = useState({ name: '', phone: '', course: '', type: '', date: '', time: '', notes: '' });

    const calCells = buildCalendar(calYear, calMonth);
    const apptDays = new Set(appts.map(a => {
        const d = new Date(a.date);
        return d.getFullYear() === calYear && d.getMonth() === calMonth ? d.getDate() : null;
    }).filter(Boolean));

    const navMonth = (dir) => {
        const d = new Date(calYear, calMonth + dir, 1);
        setCalYear(d.getFullYear());
        setCalMonth(d.getMonth());
    };

    const updateStatus = (id, status) => {
        setAppts(prev => prev.map(a => a.id === id ? { ...a, status } : a));
        if (selected?.id === id) setSelected(prev => ({ ...prev, status }));
    };

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(''), 3000);
    };

    const handleCreate = (e) => {
        e.preventDefault();
        const created = { ...newAppt, id: Date.now(), initials: newAppt.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(), av: 'av-2', status: 'pending' };
        setAppts(prev => [created, ...prev]);
        setShowModal(false);
        setNewAppt({ name: '', phone: '', course: '', type: '', date: '', time: '', notes: '' });
        showToast('Appointment created successfully!');
    };

    return (
        <AdminLayout pageTitle="Appointments" pageSubtitle="Manage consultation bookings and campus visits">
            {/* Stats */}
            <div className="appt-stats" style={{ marginBottom: 20 }}>
                {[
                    { label: "Today's Appointments", num: appts.filter(a => a.date === now.toISOString().slice(0, 10)).length || 2, color: '#facc14' },
                    { label: 'Confirmed This Week', num: appts.filter(a => a.status === 'confirmed').length, color: '#22c55e' },
                    { label: 'Pending Confirmation', num: appts.filter(a => a.status === 'pending').length, color: '#22d3ee' },
                ].map(s => (
                    <div className="appt-stat-card" key={s.label}>
                        <div className="appt-stat-num" style={{ color: s.color }}>{s.num}</div>
                        <div className="appt-stat-label">{s.label}</div>
                    </div>
                ))}
            </div>

            <div className="appts-layout">
                {/* Left — Table */}
                <div>
                    {/* Page header */}
                    <div className="page-header" style={{ marginBottom: 16 }}>
                        <div className="page-header-text">
                            <h2>All Bookings</h2>
                            <p>{appts.length} total appointments</p>
                        </div>
                        <div className="page-header-actions">
                            <button className="action-btn action-btn-primary" style={{ padding: '10px 18px' }} onClick={() => setShowModal(true)}>
                                <span className="material-symbols-outlined" style={{ fontSize: 16, marginRight: 6 }}>add</span>
                                Book Appointment
                            </button>
                        </div>
                    </div>

                    <div className="admin-card">
                        <div className="admin-table-wrap">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Student</th>
                                        <th>Course</th>
                                        <th>Type</th>
                                        <th>Date &amp; Time</th>
                                        <th>Duration</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appts.map(a => (
                                        <tr key={a.id} onClick={() => setSelected(a)}>
                                            <td>
                                                <div className="cell-with-avatar">
                                                    <div className={`admin-avatar ${a.av}`}>{a.initials}</div>
                                                    <div>
                                                        <div className="cell-primary">{a.name}</div>
                                                        <div className="cell-secondary">{a.phone}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ color: '#94a3b8', fontSize: 12 }}>{a.course}</td>
                                            <td style={{ color: '#64748b', fontSize: 12 }}>{a.type}</td>
                                            <td>
                                                <div className="cell-primary" style={{ fontSize: 12 }}>{a.date}</div>
                                                <div className="cell-secondary">{a.time}</div>
                                            </td>
                                            <td style={{ color: '#64748b', fontSize: 12 }}>{a.duration}</td>
                                            <td>
                                                <span className={`badge badge-${a.status}`}>
                                                    <span className="badge-dot" />
                                                    {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
                                                </span>
                                            </td>
                                            <td onClick={ev => ev.stopPropagation()}>
                                                <div className="action-btns">
                                                    <button className="action-btn action-btn-view" onClick={() => setSelected(a)}>View</button>
                                                    {a.status === 'pending' && (
                                                        <button className="action-btn action-btn-approve" onClick={() => updateStatus(a.id, 'confirmed')}>Confirm</button>
                                                    )}
                                                    {a.status !== 'cancelled' && (
                                                        <button className="action-btn action-btn-reject" onClick={() => updateStatus(a.id, 'cancelled')}>Cancel</button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right sidebar — Calendar + Upcoming */}
                <div>
                    {/* Mini Calendar */}
                    <div className="mini-calendar">
                        <div className="cal-header">
                            <button className="cal-nav" onClick={() => navMonth(-1)}>
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <h4>{MONTHS[calMonth]} {calYear}</h4>
                            <button className="cal-nav" onClick={() => navMonth(1)}>
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                        <div className="cal-grid">
                            {DAYS_SHORT.map(d => <div key={d} className="cal-day-name">{d}</div>)}
                            {calCells.map((day, i) => (
                                <div
                                    key={i}
                                    className={`cal-day${day === now.getDate() && calMonth === now.getMonth() && calYear === now.getFullYear() ? ' today' : ''}${day && apptDays.has(day) ? ' has-appt' : ''}`}
                                >
                                    {day || ''}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming today */}
                    <div className="admin-card" style={{ padding: 20 }}>
                        <div className="appt-sidebar-label">Today's Schedule</div>
                        {appts.filter(a => a.status !== 'cancelled').slice(0, 4).map(a => (
                            <div key={a.id} className="appt-mini-item" onClick={() => setSelected(a)} style={{ cursor: 'pointer' }}>
                                <div className="appt-mini-time">{a.time}</div>
                                <div className={`admin-avatar ${a.av}`} style={{ width: 28, height: 28, fontSize: 10, borderRadius: 8, flexShrink: 0 }}>{a.initials}</div>
                                <div className="appt-mini-info">
                                    <div className="cell-primary">{a.name}</div>
                                    <div className="cell-secondary">{a.type}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Detail panel ── */}
            {selected && (
                <>
                    <div className="panel-backdrop" onClick={() => setSelected(null)} />
                    <div className="detail-panel">
                        <div className="detail-panel-header">
                            <h3>Appointment Detail</h3>
                            <button className="detail-panel-close" onClick={() => setSelected(null)}>
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="detail-panel-body">
                            <div className="detail-student-card">
                                <div className={`admin-avatar ${selected.av}`}>{selected.initials}</div>
                                <div>
                                    <div className="detail-student-name">{selected.name}</div>
                                    <div className="detail-student-meta">{selected.type} · {selected.course}</div>
                                    <div style={{ marginTop: 6 }}>
                                        <span className={`badge badge-${selected.status}`}>
                                            <span className="badge-dot" />
                                            {selected.status.charAt(0).toUpperCase() + selected.status.slice(1)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-section">
                                <div className="detail-section-label">Booking Details</div>
                                <div className="detail-row"><span className="detail-row-label">Date</span><span className="detail-row-value">{selected.date}</span></div>
                                <div className="detail-row"><span className="detail-row-label">Time</span><span className="detail-row-value">{selected.time}</span></div>
                                <div className="detail-row"><span className="detail-row-label">Duration</span><span className="detail-row-value">{selected.duration}</span></div>
                                <div className="detail-row"><span className="detail-row-label">Phone</span><span className="detail-row-value">{selected.phone}</span></div>
                            </div>
                            <div className="detail-section">
                                <div className="detail-section-label">Notes</div>
                                <div style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6, padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
                                    {selected.notes || 'No notes added.'}
                                </div>
                            </div>
                            {selected.status !== 'cancelled' && (
                                <div className="detail-actions">
                                    {selected.status === 'pending' && (
                                        <button className="action-btn action-btn-approve" onClick={() => updateStatus(selected.id, 'confirmed')}>
                                            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>check_circle</span> Confirm
                                        </button>
                                    )}
                                    <button className="action-btn action-btn-reject" onClick={() => updateStatus(selected.id, 'cancelled')}>
                                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>cancel</span> Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}

            {/* ── New booking modal ── */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-box" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Book New Appointment</h3>
                            <button className="detail-panel-close" onClick={() => setShowModal(false)}>
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleCreate}>
                                <div className="modal-row">
                                    <div className="modal-field">
                                        <label>Student Name</label>
                                        <input className="modal-input" required placeholder="Full name" value={newAppt.name} onChange={e => setNewAppt(p => ({ ...p, name: e.target.value }))} />
                                    </div>
                                    <div className="modal-field">
                                        <label>Phone</label>
                                        <input className="modal-input" required placeholder="07x xxx xxxx" value={newAppt.phone} onChange={e => setNewAppt(p => ({ ...p, phone: e.target.value }))} />
                                    </div>
                                </div>
                                <div className="modal-row">
                                    <div className="modal-field">
                                        <label>Course Interest</label>
                                        <select className="modal-select" required value={newAppt.course} onChange={e => setNewAppt(p => ({ ...p, course: e.target.value }))}>
                                            <option value="">Select course</option>
                                            {COURSES.map(c => <option key={c}>{c}</option>)}
                                        </select>
                                    </div>
                                    <div className="modal-field">
                                        <label>Appointment Type</label>
                                        <select className="modal-select" required value={newAppt.type} onChange={e => setNewAppt(p => ({ ...p, type: e.target.value }))}>
                                            <option value="">Select type</option>
                                            {APPT_TYPES.map(t => <option key={t}>{t}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-row">
                                    <div className="modal-field">
                                        <label>Date</label>
                                        <input type="date" className="modal-input" required value={newAppt.date} onChange={e => setNewAppt(p => ({ ...p, date: e.target.value }))} />
                                    </div>
                                    <div className="modal-field">
                                        <label>Time</label>
                                        <input type="time" className="modal-input" required value={newAppt.time} onChange={e => setNewAppt(p => ({ ...p, time: e.target.value }))} />
                                    </div>
                                </div>
                                <div className="modal-field">
                                    <label>Notes (optional)</label>
                                    <textarea className="modal-textarea" rows={3} placeholder="Any notes about this appointment…" value={newAppt.notes} onChange={e => setNewAppt(p => ({ ...p, notes: e.target.value }))} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="action-btn action-btn-view" onClick={() => setShowModal(false)}>Cancel</button>
                                    <button type="submit" className="action-btn action-btn-primary">
                                        <span className="material-symbols-outlined" style={{ fontSize: 16, marginRight: 4 }}>add</span>
                                        Create Booking
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast */}
            {toast && (
                <div className="success-toast">
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>check_circle</span>
                    {toast}
                </div>
            )}
        </AdminLayout>
    );
};

export default AdminAppointments;
