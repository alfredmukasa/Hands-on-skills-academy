import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo/ChatGPT Image Feb 22, 2026, 08_33_28 PM.png';
import './AdminLogin.css';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        // Demo credentials
        if (email === 'admin@handsonacademy.co.za' && password === 'Admin@2025') {
            localStorage.setItem('handson_admin', 'true');
            navigate('/admin');
        } else {
            setError('Invalid credentials. Try admin@handsonacademy.co.za / Admin@2025');
        }
    };

    return (
        <div className="admin-login-page">
            <div className="admin-login-orb-1" />
            <div className="admin-login-orb-2" />

            <div className="admin-login-card">
                {/* Brand */}
                <div className="admin-login-brand">
                    <img src={logo} alt="Hands On Skills Academy" className="admin-login-logo" />
                </div>

                <h2>Welcome back</h2>
                <p>Sign in to access the admin panel.</p>

                {error && (
                    <div className="admin-login-error">
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>error</span>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="admin-login-field">
                        <label>Email address</label>
                        <div className="admin-login-input-wrap">
                            <span className="material-symbols-outlined">mail</span>
                            <input
                                type="email"
                                className="admin-login-input"
                                placeholder="admin@handsonacademy.co.za"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="admin-login-field">
                        <label>Password</label>
                        <div className="admin-login-input-wrap">
                            <span className="material-symbols-outlined">lock</span>
                            <input
                                type="password"
                                className="admin-login-input"
                                placeholder="••••••••"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="admin-login-btn">
                        <span className="material-symbols-outlined">login</span>
                        Sign In
                    </button>
                </form>

                <div className="admin-login-hint">
                    Demo: admin@handsonacademy.co.za / Admin@2025
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
