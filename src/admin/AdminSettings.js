import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const AdminSettings = () => {
    const [saved, setSaved] = useState(false);
    const [form, setForm] = useState({
        schoolName: 'Hands On Skills Academy',
        email: 'admin@handsonacademy.co.za',
        phone: '+27 13 656 1234',
        address: '14 Boekenhout Ave, Witbank, Mpumalanga, 1035',
        notifications: true,
        emailAlerts: true,
        smsAlerts: false,
    });

    const handleSave = (e) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const inputStyle = {
        width: '100%',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        padding: '12px 14px',
        fontSize: 13,
        color: '#e2e8f0',
        fontFamily: 'inherit',
        outline: 'none',
        boxSizing: 'border-box',
    };

    const labelStyle = {
        display: 'block',
        fontSize: 11,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        color: '#64748b',
        marginBottom: 6,
    };

    const sectionStyle = {
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 16,
        padding: 24,
        marginBottom: 16,
    };

    const sectionTitleStyle = {
        fontSize: 14,
        fontWeight: 800,
        color: '#fff',
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    };

    const toggleStyle = (on) => ({
        width: 44,
        height: 24,
        background: on ? '#facc14' : 'rgba(255,255,255,0.1)',
        borderRadius: 999,
        position: 'relative',
        cursor: 'pointer',
        transition: 'background 0.2s',
        border: 'none',
        flexShrink: 0,
    });

    const toggleDotStyle = (on) => ({
        position: 'absolute',
        top: 3,
        left: on ? 22 : 3,
        width: 18,
        height: 18,
        background: on ? '#0B0F19' : '#475569',
        borderRadius: '50%',
        transition: 'left 0.2s',
    });

    const rowStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 0',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
    };

    return (
        <AdminLayout pageTitle="Settings" pageSubtitle="Manage system preferences and notifications">
            <form onSubmit={handleSave} style={{ maxWidth: 720 }}>
                {/* Academy Info */}
                <div style={sectionStyle}>
                    <div style={sectionTitleStyle}>
                        <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#facc14' }}>business</span>
                        Academy Information
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <div>
                            <label style={labelStyle}>Academy Name</label>
                            <input style={inputStyle} value={form.schoolName} onChange={e => setForm(p => ({ ...p, schoolName: e.target.value }))} />
                        </div>
                        <div>
                            <label style={labelStyle}>Admin Email</label>
                            <input type="email" style={inputStyle} value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
                        </div>
                        <div>
                            <label style={labelStyle}>Phone Number</label>
                            <input style={inputStyle} value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                        </div>
                        <div>
                            <label style={labelStyle}>Physical Address</label>
                            <input style={inputStyle} value={form.address} onChange={e => setForm(p => ({ ...p, address: e.target.value }))} />
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <div style={sectionStyle}>
                    <div style={sectionTitleStyle}>
                        <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#facc14' }}>notifications</span>
                        Notifications
                    </div>
                    {[
                        { key: 'notifications', label: 'Browser Notifications', desc: 'Show desktop notifications for new enrollments and messages.' },
                        { key: 'emailAlerts', label: 'Email Alerts', desc: 'Receive email digest when new enrollment is submitted.' },
                        { key: 'smsAlerts', label: 'SMS Notifications', desc: 'Send SMS to admin phone for urgent appointment updates.' },
                    ].map(item => (
                        <div key={item.key} style={rowStyle}>
                            <div>
                                <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>{item.label}</div>
                                <div style={{ fontSize: 11, color: '#475569', marginTop: 2 }}>{item.desc}</div>
                            </div>
                            <button
                                type="button"
                                style={toggleStyle(form[item.key])}
                                onClick={() => setForm(p => ({ ...p, [item.key]: !p[item.key] }))}
                            >
                                <div style={toggleDotStyle(form[item.key])} />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Admin Password */}
                <div style={sectionStyle}>
                    <div style={sectionTitleStyle}>
                        <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#facc14' }}>lock</span>
                        Change Password
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <div>
                            <label style={labelStyle}>Current Password</label>
                            <input type="password" style={inputStyle} placeholder="••••••••" />
                        </div>
                        <div>
                            <label style={labelStyle}>New Password</label>
                            <input type="password" style={inputStyle} placeholder="••••••••" />
                        </div>
                    </div>
                </div>

                {/* Save button */}
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <button
                        type="submit"
                        className="action-btn action-btn-primary"
                        style={{ padding: '14px 32px', fontSize: 14, borderRadius: 12, fontFamily: 'inherit' }}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: 18, marginRight: 6 }}>save</span>
                        Save Changes
                    </button>
                    {saved && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#22c55e' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>check_circle</span>
                            Settings saved!
                        </span>
                    )}
                </div>
            </form>
        </AdminLayout>
    );
};

export default AdminSettings;
