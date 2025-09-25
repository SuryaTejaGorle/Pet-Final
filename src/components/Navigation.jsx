import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation({ user, isLoggedIn, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getDashboardLink = () => {
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
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.navLogo} onClick={closeMenu}>
          <span className={styles.logoIcon}>🐾</span>
          PetHome
        </Link>

        <div className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <Link to="/" className={styles.navLink} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/browse-pets" className={styles.navLink} onClick={closeMenu}>
            Browse Pets
          </Link>
          <Link to="/about" className={styles.navLink} onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/contact" className={styles.navLink} onClick={closeMenu}>
            Contact
          </Link>
          
          {isLoggedIn ? (
            <>
              <Link to={getDashboardLink()} className={styles.navLink} onClick={closeMenu}>
                Dashboard
              </Link>
              <div className={styles.userInfo}>
                <span className={styles.userName}>Hi, {user?.name}</span>
                <button onClick={handleLogout} className={`${styles.navButton} ${styles.logoutButton}`}>
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className={styles.authButtons}>
              <Link to="/login" className={`${styles.navButton} ${styles.loginButton}`} onClick={closeMenu}>
                Login
              </Link>
              <Link to="/signup" className={`${styles.navButton} ${styles.signupButton}`} onClick={closeMenu}>
                Register
              </Link>
            </div>
          )}
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;