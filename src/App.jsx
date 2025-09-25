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
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

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

  return (
    <Router>
      <div className="App">
        <Navigation user={user} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/browse-pets" element={<BrowsePets />} />
            <Route path="/pet/:id" element={<PetProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/login" 
              element={
                isLoggedIn ? <Navigate to={getDashboardRoute()} /> : 
                <Login onLogin={handleLogin} />
              } 
            />
            <Route 
              path="/signup" 
              element={
                isLoggedIn ? <Navigate to={getDashboardRoute()} /> : 
                <Signup onSignup={handleLogin} />
              } 
            />
            <Route 
              path="/adopter-dashboard" 
              element={
                isLoggedIn && user?.role === 'adopter' ? 
                <AdopterDashboard user={user} /> : 
                <Navigate to="/login" />
              } 
            />
            <Route 
              path="/shelter-dashboard" 
              element={
                isLoggedIn && user?.role === 'shelter' ? 
                <ShelterDashboard user={user} /> : 
                <Navigate to="/login" />
              } 
            />
            <Route 
              path="/admin-dashboard" 
              element={
                isLoggedIn && user?.role === 'admin' ? 
                <AdminDashboard user={user} /> : 
                <Navigate to="/login" />
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;