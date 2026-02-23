import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

// Public site
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import About from './components/About';
import Courses from './components/Courses';
import Enroll from './components/Enroll';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

// Admin panel
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AdminEnrollments from './admin/AdminEnrollments';
import AdminMessages from './admin/AdminMessages';
import AdminAppointments from './admin/AdminAppointments';
import AdminSettings from './admin/AdminSettings';

// Simple auth guard — checks localStorage flag set on login
const RequireAdmin = ({ children }) => {
  const isAdmin = localStorage.getItem('handson_admin') === 'true';
  return isAdmin ? children : <Navigate to="/admin/login" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* ── Admin routes (no public navbar/footer) ── */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<RequireAdmin><AdminDashboard /></RequireAdmin>} />
        <Route path="/admin/enrollments" element={<RequireAdmin><AdminEnrollments /></RequireAdmin>} />
        <Route path="/admin/messages" element={<RequireAdmin><AdminMessages /></RequireAdmin>} />
        <Route path="/admin/appointments" element={<RequireAdmin><AdminAppointments /></RequireAdmin>} />
        <Route path="/admin/settings" element={<RequireAdmin><AdminSettings /></RequireAdmin>} />

        {/* ── Public site routes ── */}
        <Route
          path="/*"
          element={
            <div className="App">
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/enroll" element={<Enroll />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
