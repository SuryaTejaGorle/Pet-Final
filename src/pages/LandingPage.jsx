import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

function LandingPage() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Dog Adopter",
      content: "I found my best friend Max through PetHome. The process was smooth and the staff was incredibly helpful!",
      rating: 5
    },
    {
      id: 2,
      name: "Happy Tails Shelter",
      role: "Partner Shelter",
      content: "PetHome has helped us find loving homes for over 200 pets this year. Their platform makes adoption easy!",
      rating: 5
    },
    {
      id: 3,
      name: "Mike Chen",
      role: "Cat Adopter",
      content: "The detailed pet profiles helped me find the perfect match. Luna has brought so much joy to our family!",
      rating: 5
    }
  ];

  const steps = [
    {
      icon: "🔍",
      title: "Browse Pets",
      description: "Search through hundreds of pets looking for their forever home"
    },
    {
      icon: "❤️",
      title: "Find Your Match",
      description: "Use our filters to find pets that match your lifestyle and preferences"
    },
    {
      icon: "📝",
      title: "Apply to Adopt",
      description: "Fill out an adoption application and connect with the shelter"
    },
    {
      icon: "🏠",
      title: "Welcome Home",
      description: "Complete the adoption process and welcome your new family member"
    }
  ];

  return (
    <div className={styles.landingPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Find Loving Homes for Pets
            </h1>
            <p className={styles.heroSubtitle}>
              Connect with adorable pets in need of forever homes. Our platform makes 
              pet adoption simple, safe, and rewarding for both pets and families.
            </p>
            <div className={styles.heroButtons}>
              <Link to="/browse-pets" className={`btn btn-primary ${styles.heroButton}`}>
                Browse Pets
              </Link>
              <Link to="/signup" className={`btn btn-secondary ${styles.heroButton}`}>
                Register Now
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img 
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Happy pets waiting for adoption" 
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2>About PetHome</h2>
              <p>
                We are passionate about connecting loving families with pets in need of homes. 
                Our platform serves as a bridge between animal shelters, rescue organizations, 
                and potential pet adopters, making the adoption process transparent and efficient.
              </p>
              <p>
                With thousands of successful adoptions and partnerships with verified shelters 
                across the country, we're committed to reducing pet homelessness and creating 
                lasting bonds between pets and their new families.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>10,000+</span>
                  <span className={styles.statLabel}>Pets Adopted</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Partner Shelters</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>25,000+</span>
                  <span className={styles.statLabel}>Happy Families</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <img 
                src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Pet adoption success story" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <div className="container">
          <div className="text-center">
            <h2>How Pet Adoption Works</h2>
            <p className={styles.sectionSubtitle}>
              Our simple four-step process makes finding your perfect companion easy and stress-free
            </p>
          </div>
          
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div key={index} className={styles.step}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <div className={styles.stepNumber}>{index + 1}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className="container">
          <div className="text-center">
            <h2>Success Stories</h2>
            <p className={styles.sectionSubtitle}>
              Hear from families and shelters who have found success through our platform
            </p>
          </div>
          
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonial}>
                <div className={styles.testimonialRating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className={styles.star}>⭐</span>
                  ))}
                </div>
                <p className={styles.testimonialContent}>"{testimonial.content}"</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{testimonial.name}</strong>
                  <span className={styles.authorRole}>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className="text-center">
            <h2>Ready to Find Your Perfect Pet?</h2>
            <p>Join thousands of families who have found their furry companions through PetHome</p>
            <div className={styles.ctaButtons}>
              <Link to="/browse-pets" className="btn btn-primary">
                Start Browsing
              </Link>
              <Link to="/signup" className="btn btn-accent">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;