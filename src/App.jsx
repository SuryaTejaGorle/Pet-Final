import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdopterDashboard from './pages/AdopterDashboard';
import ShelterDashboard from './pages/ShelterDashboard';
import AdminDashboard from './pages/AdminDashboard';
import BrowsePets from './pages/BrowsePets';
import PetProfile from './pages/PetProfile';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  // State for user and login status
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle user login
  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  // Handle user logout
  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  // Determine which dashboard route to navigate after login
  const getDashboardRoute = () => {
    if (!user) return '/';
    switch (user.role) {
      case 'adopter':
        return '/adopter-dashboard';
      case 'shelter':
        return '/shelter-dashboard';
      case 'admin':
        return '/admin-dashboard';
      default:
        return '/';
    }
  };

  // Base path for SPA routing (works for Tomcat, GitHub Pages, Docker)
  const basePath = import.meta.env.VITE_BASE_URL || '/';

  return (
    <Router basename={basePath}>
      <div className="App">
        {/* Navigation bar */}
        <Navigation user={user} isLoggedIn={isLoggedIn} onLogout={handleLogout} />

        {/* Main content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/browse-pets" element={<BrowsePets />} />
            <Route path="/pet/:id" element={<PetProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Login route */}
            <Route
              path="/login"
              element={
                isLoggedIn ? <Navigate to={getDashboardRoute()} /> : <Login onLogin={handleLogin} />
              }
            />

            {/* Signup route */}
            <Route
              path="/signup"
              element={
                isLoggedIn ? <Navigate to={getDashboardRoute()} /> : <Signup onSignup={handleLogin} />
              }
            />

            {/* Adopter Dashboard */}
            <Route
              path="/adopter-dashboard"
              element={
                isLoggedIn && user?.role === 'adopter' ? (
                  <AdopterDashboard user={user} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            {/* Shelter Dashboard */}
            <Route
              path="/shelter-dashboard"
              element={
                isLoggedIn && user?.role === 'shelter' ? (
                  <ShelterDashboard user={user} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            {/* Admin Dashboard */}
            <Route
              path="/admin-dashboard"
              element={
                isLoggedIn && user?.role === 'admin' ? (
                  <AdminDashboard user={user} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
