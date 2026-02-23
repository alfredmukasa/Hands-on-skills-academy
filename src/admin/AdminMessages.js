import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import './AdminMessages.css';

const INIT_MSGS = [
    { id: 1, name: 'James Wilson', initials: 'JW', av: 'av-1', subject: 'Application Status Query', preview: 'Just checking in on my application status for Mining Excellence...', body: 'Good day, I submitted my enrollment application for the Mining Excellence programme about two weeks ago. Could you kindly provide me with a status update? I am very eager to start and would appreciate any feedback. Thank you.', time: '10:24 AM', unread: true, starred: false, tab: 'all' },
    { id: 2, name: 'Sarah Smith', initials: 'SS', av: 'av-2', subject: 'Question About Syllabus', preview: 'I was wondering if Module 4 of the NATED N3 is included in...', body: 'Hello, I am considering enrolling in the NATED N3 Mechanical Engineering programme. I would like to know if Module 4 (Fitting & Turning) is included in the curriculum this intake. Also, are any tools provided, or do students need to bring their own? Regards, Sarah.', time: '9:05 AM', unread: true, starred: true, tab: 'all' },
    { id: 3, name: 'David Chen', initials: 'DC', av: 'av-3', subject: 'Payment Confirmation', preview: "I've processed the payment for the Electrical Trade course...", body: "Hi, I just wanted to confirm that I have completed payment via EFT for the Electrical Trade Installations course. Reference number: KAM-2026-0045. Please confirm receipt and let me know the next steps. Thanks, David.", time: 'Yesterday', unread: false, starred: false, tab: 'all' },
    { id: 4, name: 'Maria Garcia', initials: 'MG', av: 'av-4', subject: 'Rescheduling Appointment', preview: 'Can we move our call from Friday to tomorrow at 2pm?', body: 'Good afternoon, I had an appointment scheduled with your admissions team for this Friday at 3pm. Unfortunately something came up. Could we reschedule to tomorrow (Thursday) at 2pm instead? Please confirm if that works. Many thanks.', time: 'Yesterday', unread: true, starred: false, tab: 'all' },
    { id: 5, name: 'Priya Naidoo', initials: 'PN', av: 'av-5', subject: 'Financial Assistance', preview: 'I would like to know more about SETA funding for the Matric...', body: 'Dear Admin, I would like to inquire about financial assistance for the Matric Rewrite programme. I heard that SETA funding may be available for qualifying students. Can you advise on the process and eligibility criteria? Thank you very much.', time: 'Feb 20', unread: false, starred: true, tab: 'all' },
    { id: 6, name: 'Bongani Zwane', initials: 'BZ', av: 'av-3', subject: 'Campus Visit Request', preview: 'Would it be possible to arrange a tour of the campus before...', body: 'Hello, I am very interested in enrolling at Hands On Skills Academy but would like to visit the campus before making my decision. Is it possible to arrange a guided tour of the facilities? Please let me know available dates. Kind regards, Bongani.', time: 'Feb 19', unread: false, starred: false, tab: 'all' },
];

const TABS = ['all', 'unread', 'starred'];

const AdminMessages = () => {
    const [messages, setMessages] = useState(INIT_MSGS);
    const [active, setActive] = useState(null);
    const [tab, setTab] = useState('all');
    const [search, setSearch] = useState('');
    const [reply, setReply] = useState('');
    const [sent, setSent] = useState(false);

    const filtered = messages.filter(m => {
        const matchTab = tab === 'all' || (tab === 'unread' && m.unread) || (tab === 'starred' && m.starred);
        const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.subject.toLowerCase().includes(search.toLowerCase());
        return matchTab && matchSearch;
    });

    const openMessage = (m) => {
        setActive(m);
        setSent(false);
        setReply('');
        setMessages(prev => prev.map(msg => msg.id === m.id ? { ...msg, unread: false } : msg));
    };

    const toggleStar = (id) => {
        setMessages(prev => prev.map(m => m.id === id ? { ...m, starred: !m.starred } : m));
        if (active?.id === id) setActive(prev => ({ ...prev, starred: !prev.starred }));
    };

    const deleteMsg = (id) => {
        setMessages(prev => prev.filter(m => m.id !== id));
        if (active?.id === id) setActive(null);
    };

    const sendReply = () => {
        if (!reply.trim()) return;
        setSent(true);
        setReply('');
    };

    const unreadCount = messages.filter(m => m.unread).length;

    return (
        <AdminLayout
            pageTitle={`Messages ${unreadCount > 0 ? `(${unreadCount} unread)` : ''}`}
            pageSubtitle="Respond to student and prospective student enquiries"
        >
            <div className="messages-layout">
                {/* ── Inbox Pane ── */}
                <div className="inbox-pane">
                    <div className="inbox-header">
                        <div className="inbox-header-top">
                            <h3>Inbox</h3>
                            <button className="compose-btn">
                                <span className="material-symbols-outlined">edit_square</span>
                                Compose
                            </button>
                        </div>
                        <div className="inbox-search">
                            <span className="material-symbols-outlined">search</span>
                            <input
                                className="inbox-search-input"
                                placeholder="Search messages…"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="inbox-tabs">
                        {TABS.map(t => (
                            <button
                                key={t}
                                className={`inbox-tab${tab === t ? ' active' : ''}`}
                                onClick={() => setTab(t)}
                            >
                                {t.charAt(0).toUpperCase() + t.slice(1)}
                                {t === 'unread' && unreadCount > 0 && (
                                    <span style={{ marginLeft: 6, background: '#facc14', color: '#0B0F19', borderRadius: 999, fontSize: 9, fontWeight: 800, padding: '1px 6px' }}>{unreadCount}</span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Message list */}
                    <ul className="inbox-list">
                        {filtered.length === 0 && (
                            <li style={{ padding: '40px 20px', textAlign: 'center', color: '#334155', fontSize: 12 }}>
                                No messages found.
                            </li>
                        )}
                        {filtered.map(m => (
                            <li
                                key={m.id}
                                className={`inbox-list-item${active?.id === m.id ? ' selected' : ''}`}
                                onClick={() => openMessage(m)}
                            >
                                <div className={`inbox-unread${m.unread ? '' : ' read'}`} />
                                <div
                                    className={`admin-avatar ${m.av}`}
                                    style={{ width: 36, height: 36, fontSize: 12, borderRadius: 10, flexShrink: 0 }}
                                >
                                    {m.initials}
                                </div>
                                <div className="inbox-item-body">
                                    <div className="inbox-item-top">
                                        <span className="inbox-item-sender">{m.name}</span>
                                        <span className="inbox-item-time">{m.time}</span>
                                    </div>
                                    <div className="inbox-item-subject">{m.subject}</div>
                                    <div className="inbox-item-preview">{m.preview}</div>
                                </div>
                                <button
                                    className={`inbox-star-btn${m.starred ? ' starred' : ''}`}
                                    onClick={ev => { ev.stopPropagation(); toggleStar(m.id); }}
                                >
                                    <span className="material-symbols-outlined">
                                        {m.starred ? 'star' : 'star_border'}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── Message Detail Pane ── */}
                {!active ? (
                    <div className="message-pane">
                        <div className="message-pane-empty">
                            <span className="material-symbols-outlined">mark_email_read</span>
                            <p>Select a message to read it</p>
                        </div>
                    </div>
                ) : (
                    <div className="message-pane">
                        {/* Header */}
                        <div className="msg-detail-header">
                            <div>
                                <div className="msg-detail-subject">{active.subject}</div>
                                <div className="msg-sender-card">
                                    <div className={`admin-avatar ${active.av}`} style={{ width: 32, height: 32, fontSize: 11, borderRadius: 8 }}>{active.initials}</div>
                                    <div className="msg-sender-info">
                                        <strong>{active.name}</strong><br />
                                        <span>{active.time}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="msg-detail-actions">
                                <button className={`msg-action-icon${active.starred ? '' : ''}`} onClick={() => toggleStar(active.id)} title={active.starred ? 'Unstar' : 'Star'}>
                                    <span className="material-symbols-outlined" style={{ color: active.starred ? '#facc14' : '' }}>
                                        {active.starred ? 'star' : 'star_border'}
                                    </span>
                                </button>
                                <button className="msg-action-icon" title="Mark as unread" onClick={() => setMessages(prev => prev.map(m => m.id === active.id ? { ...m, unread: true } : m))}>
                                    <span className="material-symbols-outlined">mark_as_unread</span>
                                </button>
                                <button className="msg-action-icon delete" title="Delete" onClick={() => deleteMsg(active.id)}>
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="msg-detail-body">
                            <p className="msg-body-text">{active.body}</p>

                            {/* Thread */}
                            <div className="msg-thread">
                                <div className="msg-thread-label">Thread History</div>
                                <div className="msg-thread-item">
                                    <div className="msg-thread-meta">
                                        <span className="msg-thread-from">Admin (You)</span>
                                        <span className="msg-thread-time">Feb 18, 2026 at 11:00 AM</span>
                                    </div>
                                    Thank you for reaching out to Hands On Skills Academy. We have received your enquiry and will get back to you within 24 hours during business days.
                                </div>
                            </div>
                        </div>

                        {/* Reply */}
                        <div className="msg-reply-area">
                            {sent ? (
                                <div style={{ padding: '12px 16px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, fontSize: 13, color: '#22c55e', display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>check_circle</span>
                                    Reply sent successfully.
                                    <button style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#22c55e', cursor: 'pointer', fontSize: 11 }} onClick={() => setSent(false)}>Reply again</button>
                                </div>
                            ) : (
                                <div className="msg-reply-box">
                                    <textarea
                                        className="msg-reply-textarea"
                                        placeholder={`Reply to ${active.name}…`}
                                        rows={2}
                                        value={reply}
                                        onChange={e => setReply(e.target.value)}
                                    />
                                    <button className="msg-send-btn" onClick={sendReply}>
                                        <span className="material-symbols-outlined">send</span>
                                        Send
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default AdminMessages;
