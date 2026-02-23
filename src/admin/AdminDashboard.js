import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import './AdminDashboard.css';

const kpis = [
    { icon: 'school', label: 'Total Enrollments', num: '247', trend: '+12%', up: true, color: 'yellow' },
    { icon: 'pending_actions', label: 'Pending Reviews', num: '18', trend: '+3', up: true, color: 'cyan' },
    { icon: 'chat_bubble', label: 'Unread Messages', num: '34', trend: '+8', up: false, color: 'red' },
    { icon: 'calendar_month', label: "Today's Appointments", num: '6', trend: '2 new', up: true, color: 'green' },
];

const recentEnrollments = [
    { name: 'Thabo Mokoena', initials: 'TM', av: 'av-1', course: 'Mining Excellence', status: 'pending', date: 'Feb 22, 2026' },
    { name: 'Sarah Khumalo', initials: 'SK', av: 'av-2', course: 'NATED Engineering', status: 'approved', date: 'Feb 22, 2026' },
    { name: 'Mike Dlamini', initials: 'MD', av: 'av-3', course: 'Matric Rewrite', status: 'approved', date: 'Feb 21, 2026' },
    { name: 'Linda Nkosi', initials: 'LN', av: 'av-4', course: 'Safety Training', status: 'rejected', date: 'Feb 21, 2026' },
    { name: 'Ayesha Fakude', initials: 'AF', av: 'av-5', course: 'Electrical Trade', status: 'pending', date: 'Feb 20, 2026' },
];

const recentMessages = [
    { name: 'James Wilson', subject: 'Application Status', preview: 'Just checking in on my application...', time: '10:24 AM', unread: true },
    { name: 'Sarah Smith', subject: 'Question about syllabus', preview: 'I was wondering if module 4 is included...', time: '9:05 AM', unread: true },
    { name: 'David Chen', subject: 'Payment Confirmation', preview: 'I\'ve processed the payment for the...', time: 'Yesterday', unread: false },
    { name: 'Maria Garcia', subject: 'Rescheduling Interview', preview: 'Can we move our call to tomorrow at 2pm?', time: 'Yesterday', unread: true },
];

const upcomingAppts = [
    { name: 'Thabo Mokoena', course: 'Mining Excellence', time: '09:00', day: 'Mon', status: 'confirmed' },
    { name: 'Emily Dube', course: 'NATED Engineering', time: '10:30', day: 'Mon', status: 'confirmed' },
    { name: 'Mike Sithole', course: 'Safety Training', time: '14:00', day: 'Tue', status: 'pending' },
    { name: 'Priya Naidoo', course: 'Matric Rewrite', time: '15:00', day: 'Wed', status: 'confirmed' },
];

const activity = [
    { icon: 'person_add', color: 'kpi-icon-cyan', text: <><strong>Thabo Mokoena</strong> submitted an enrollment for Mining Excellence</>, time: '10 mins ago' },
    { icon: 'check_circle', color: 'kpi-icon-green', text: <><strong>Sarah Khumalo</strong>'s application was <strong>approved</strong></>, time: '1 hour ago' },
    { icon: 'chat_bubble', color: 'kpi-icon-yellow', text: <><strong>4 new messages</strong> received from prospective students</>, time: '2 hours ago' },
    { icon: 'calendar_month', color: 'kpi-icon-cyan', text: <><strong>Emily Dube</strong> booked a campus tour appointment</>, time: '3 hours ago' },
    { icon: 'cancel', color: 'kpi-icon-red', text: <><strong>Linda Nkosi</strong>'s application was <strong>rejected</strong></>, time: 'Yesterday' },
];

const statusLabel = { pending: 'Pending', approved: 'Approved', rejected: 'Rejected', confirmed: 'Confirmed' };

const AdminDashboard = () => (
    <AdminLayout
        pageTitle="Dashboard"
        pageSubtitle="Welcome back, Alex — here's what's happening at Hands On Skills Academy today."
    >
        {/* KPI Cards */}
        <div className="dashboard-grid">
            {kpis.map(k => (
                <div className="kpi-card" key={k.label}>
                    <div className="kpi-card-top">
                        <div className={`kpi-icon kpi-icon-${k.color}`}>
                            <span className="material-symbols-outlined">{k.icon}</span>
                        </div>
                        <div className={`kpi-trend ${k.up ? 'kpi-trend-up' : 'kpi-trend-down'}`}>
                            <span className="material-symbols-outlined">{k.up ? 'trending_up' : 'trending_down'}</span>
                            {k.trend}
                        </div>
                    </div>
                    <div>
                        <div className="kpi-num">{k.num}</div>
                        <div className="kpi-label">{k.label}</div>
                    </div>
                </div>
            ))}
        </div>

        {/* Recent Enrollments + Messages */}
        <div className="dashboard-row">
            {/* Enrollments */}
            <div className="admin-card">
                <div className="section-card-header">
                    <h3>Recent Enrollments</h3>
                    <NavLink to="/admin/enrollments" className="section-card-link">
                        View All <span className="material-symbols-outlined">arrow_forward</span>
                    </NavLink>
                </div>
                <div className="admin-table-wrap">
                    <table className="mini-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Course</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentEnrollments.map(e => (
                                <tr key={e.name}>
                                    <td>
                                        <div className="cell-with-avatar">
                                            <div className={`admin-avatar ${e.av}`}>{e.initials}</div>
                                            <span className="cell-primary">{e.name}</span>
                                        </div>
                                    </td>
                                    <td style={{ color: '#64748b', fontSize: 12 }}>{e.course}</td>
                                    <td><span className={`badge badge-${e.status}`}><span className="badge-dot" />{statusLabel[e.status]}</span></td>
                                    <td style={{ color: '#475569', fontSize: 11 }}>{e.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Messages */}
            <div className="admin-card">
                <div className="section-card-header">
                    <h3>Recent Messages</h3>
                    <NavLink to="/admin/messages" className="section-card-link">
                        View All <span className="material-symbols-outlined">arrow_forward</span>
                    </NavLink>
                </div>
                <ul className="msg-list">
                    {recentMessages.map(m => (
                        <li key={m.name} className="msg-item">
                            <div className={`msg-unread-dot${m.unread ? '' : ' read'}`} />
                            <div
                                className="admin-avatar av-1"
                                style={{ width: 34, height: 34, fontSize: 11, borderRadius: 8 }}
                            >
                                {m.name.split(' ').map(w => w[0]).join('')}
                            </div>
                            <div className="msg-item-content">
                                <div className="msg-item-top">
                                    <span className="msg-sender">{m.name}</span>
                                    <span className="msg-time">{m.time}</span>
                                </div>
                                <div className="msg-subject">{m.subject}</div>
                                <div className="msg-preview">{m.preview}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Appointments + Activity */}
        <div className="dashboard-row">
            {/* Upcoming Appointments */}
            <div className="admin-card">
                <div className="section-card-header">
                    <h3>Upcoming Appointments</h3>
                    <NavLink to="/admin/appointments" className="section-card-link">
                        View All <span className="material-symbols-outlined">arrow_forward</span>
                    </NavLink>
                </div>
                <ul className="appt-list">
                    {upcomingAppts.map(a => (
                        <li key={a.name} className="appt-item">
                            <div className="appt-time-block">
                                <div className="appt-time">{a.time}</div>
                                <div className="appt-day">{a.day}</div>
                            </div>
                            <div className="admin-avatar av-2" style={{ borderRadius: 10 }}>
                                {a.name.split(' ').map(w => w[0]).join('')}
                            </div>
                            <div className="appt-info">
                                <div className="appt-name">{a.name}</div>
                                <div className="appt-course">{a.course}</div>
                            </div>
                            <span className={`badge badge-${a.status}`}>{statusLabel[a.status]}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Activity Feed */}
            <div className="admin-card">
                <div className="section-card-header">
                    <h3>Recent Activity</h3>
                </div>
                <ul className="activity-list">
                    {activity.map((a, i) => (
                        <li key={i} className="activity-item">
                            <div className={`activity-dot ${a.color}`}>
                                <span className="material-symbols-outlined">{a.icon}</span>
                            </div>
                            <div>
                                <div className="activity-text">{a.text}</div>
                                <div className="activity-time">{a.time}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </AdminLayout>
);

export default AdminDashboard;
