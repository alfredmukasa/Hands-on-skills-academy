import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../logo/ChatGPT Image Feb 22, 2026, 08_33_28 PM.png';
import './AdminLayout.css';

const NAV_ITEMS = [
    { section: 'Main' },
    { icon: 'dashboard', label: 'Dashboard', to: '/admin', exact: true },
    { icon: 'school', label: 'Enrollments', to: '/admin/enrollments', badge: '5' },
    { icon: 'chat_bubble', label: 'Messages', to: '/admin/messages', badge: '3' },
    { icon: 'calendar_month', label: 'Appointments', to: '/admin/appointments' },
    { section: 'Config' },
    { icon: 'settings', label: 'Settings', to: '/admin/settings' },
];

const AdminLayout = ({ children, pageTitle, pageSubtitle }) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('handson_admin');
        navigate('/admin/login');
    };

    return (
        <div className="admin-shell">
            {/* ── Sidebar ── */}
            <aside className={`admin-sidebar${collapsed ? ' collapsed' : ''}`}>
                <div className="sidebar-brand">
                    <img
                        src={logo}
                        alt="Hands On Skills Academy"
                        className={`sidebar-logo${collapsed ? ' sidebar-logo-sm' : ''}`}
                    />
                </div>

                <nav className="sidebar-nav">
                    {NAV_ITEMS.map((item, i) => {
                        if (item.section) {
                            return (
                                <div key={i} className="sidebar-section-label">{item.section}</div>
                            );
                        }
                        return (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.exact}
                                className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
                                title={collapsed ? item.label : ''}
                            >
                                <span className="material-symbols-outlined">{item.icon}</span>
                                <span className="sidebar-link-label">{item.label}</span>
                                {!collapsed && item.badge && (
                                    <span className="sidebar-badge">{item.badge}</span>
                                )}
                            </NavLink>
                        );
                    })}
                </nav>

                <button className="sidebar-collapse-btn" onClick={() => setCollapsed(c => !c)}>
                    <span className="material-symbols-outlined">
                        {collapsed ? 'chevron_right' : 'chevron_left'}
                    </span>
                    {!collapsed && 'Collapse menu'}
                </button>
            </aside>

            {/* ── Main ── */}
            <div className={`admin-main${collapsed ? ' collapsed' : ''}`}>
                {/* Topbar */}
                <header className="admin-topbar">
                    <div className="admin-topbar-title">
                        <h1>{pageTitle}</h1>
                        {pageSubtitle && <p>{pageSubtitle}</p>}
                    </div>

                    <div className="topbar-actions">
                        {/* Notifications */}
                        <button className="topbar-icon-btn" title="Notifications">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="notif-dot" />
                        </button>

                        {/* Search */}
                        <button className="topbar-icon-btn" title="Search">
                            <span className="material-symbols-outlined">search</span>
                        </button>

                        {/* Avatar */}
                        <div className="topbar-avatar" title="Admin">A</div>

                        {/* Logout */}
                        <button className="topbar-logout-btn" onClick={handleLogout}>
                            <span className="material-symbols-outlined">logout</span>
                            Logout
                        </button>
                    </div>
                </header>

                {/* Page content */}
                <main className="admin-content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
