import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Auth.module.css';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock login logic - in real app, validate against backend
      const mockUser = {
        id: 1,
        name: formData.email.split('@')[0],
        email: formData.email,
        role: 'adopter' // Default role for demo
      };
      
      onLogin(mockUser);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.authHeader}>
          <h1 className={styles.authTitle}>Welcome Back</h1>
          <p className={styles.authSubtitle}>Sign in to your PetHome account</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.authForm}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? styles.inputError : ''}`}
              placeholder="Enter your email"
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`form-input ${errors.password ? styles.inputError : ''}`}
              placeholder="Enter your password"
            />
            {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
          </div>

          <div className={styles.authOptions}>
            <label className={styles.checkbox}>
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
              Remember me
            </label>
            <Link to="#" className={styles.forgotPassword}>
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`btn btn-primary ${styles.authButton}`}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className={styles.authFooter}>
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className={styles.authLink}>
              Sign up here
            </Link>
          </p>
        </div>

        <div className={styles.demoCredentials}>
          <h4>Demo Credentials:</h4>
          <p><strong>Adopter:</strong> adopter@demo.com / password</p>
          <p><strong>Shelter:</strong> shelter@demo.com / password</p>
          <p><strong>Admin:</strong> admin@demo.com / password</p>
        </div>
      </div>
    </div>
  );
}

export default Login;