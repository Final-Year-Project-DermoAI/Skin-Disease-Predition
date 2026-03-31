import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import PatientDashboard from './pages/Patient/Dashboard';
import DoctorDashboard from './pages/Doctor/Dashboard';
import DoctorOnboarding from './pages/Doctor/DoctorOnboarding';
import AdminDashboard from './pages/Admin/Dashboard';
import LandingPage from './pages/Landing/LandingPage';
import Features from './pages/Landing/Features';
import Intelligence from './pages/Landing/Intelligence';
import Network from './pages/Landing/Network';
import Portal from './pages/Landing/Portal';
import DoctorRegistration from './pages/Auth/DoctorRegistration';
import { checkBackendConnection } from './services/api';

function App() {
  useEffect(() => {
    // Ping the backend on mount to check connection health automatically!
    checkBackendConnection().then((isOnline) => {
      if (!isOnline) {
         console.warn("⚠️ API Failed: Make sure 'npm run dev' is active in skin_termo_backend_node on port 3000.");
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/intelligence" element={<Intelligence />} />
        <Route path="/network" element={<Network />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctor/register" element={<DoctorRegistration />} />
        <Route path="/patient/*" element={<PatientDashboard />} />
        <Route path="/doctor/onboarding" element={<DoctorOnboarding />} />
        <Route path="/doctor/*" element={<DoctorDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
