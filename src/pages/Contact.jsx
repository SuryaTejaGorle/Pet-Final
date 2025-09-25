import React, { useState } from 'react';
import styles from './StaticPages.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'info@pethome.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '(555) 123-4567',
      description: 'Call us Mon-Fri 9AM-6PM EST'
    },
    {
      icon: '📍',
      title: 'Address',
      content: '123 Pet Street, Animal City, AC 12345',
      description: 'Visit our headquarters'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      content: 'Available 24/7',
      description: 'Chat with our support team'
    }
  ];

  const faqItems = [
    {
      question: 'How do I start the adoption process?',
      answer: 'Browse our available pets, create an account, and submit an adoption application for the pet you\'re interested in. The shelter will review your application and contact you directly.'
    },
    {
      question: 'Is there a fee to use PetHome?',
      answer: 'PetHome is completely free for adopters. Shelters may have their own adoption fees, which vary by organization and help cover the cost of care, vaccinations, and spaying/neutering.'
    },
    {
      question: 'How do I list my shelter on PetHome?',
      answer: 'Register as a shelter account and complete our verification process. Once approved, you can start listing pets for adoption and managing adoption requests.'
    },
    {
      question: 'What if I need to return a pet?',
      answer: 'While we hope all adoptions are permanent, we understand circumstances can change. Contact the shelter where you adopted your pet to discuss your situation and available options.'
    }
  ];

  return (
    <div className={styles.staticPage}>
      <div className="container">
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            We're here to help with any questions about pet adoption
          </p>
        </section>

        {/* Contact Info */}
        <section className={styles.section}>
          <div className={styles.contactGrid}>
            {contactInfo.map((info, index) => (
              <div key={index} className={styles.contactCard}>
                <div className={styles.contactIcon}>{info.icon}</div>
                <h3>{info.title}</h3>
                <p className={styles.contactContent}>{info.content}</p>
                <p className={styles.contactDescription}>{info.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className={styles.section}>
          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <h2>Send us a Message</h2>
              <p>Have a question or need assistance? We'd love to hear from you.</p>
            </div>
            
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className="grid grid-2">
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-2">
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select a category</option>
                    <option value="adoption">Adoption Questions</option>
                    <option value="shelter">Shelter Partnership</option>
                    <option value="technical">Technical Support</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                  rows="6"
                  placeholder="Tell us how we can help..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <h2 className={styles.centerTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            {faqItems.map((faq, index) => (
              <div key={index} className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Contact */}
        <section className={`${styles.section} ${styles.emergency}`}>
          <div className={styles.emergencyCard}>
            <h2>🚨 Emergency Pet Situations</h2>
            <p>
              If you've found a lost pet or are dealing with an emergency animal situation, 
              please contact your local animal control or emergency veterinary services immediately. 
              For urgent platform issues, call our emergency line.
            </p>
            <div className={styles.emergencyInfo}>
              <strong>Emergency Line: (555) 123-HELP (4357)</strong>
              <small>Available 24/7 for urgent situations</small>
            </div>
          </div>
        </section>

        {/* Office Hours */}
        <section className={styles.section}>
          <div className={styles.hoursGrid}>
            <div className={styles.hoursCard}>
              <h3>🕐 Business Hours</h3>
              <div className={styles.hoursList}>
                <div className={styles.hoursItem}>
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className={styles.hoursItem}>
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className={styles.hoursItem}>
                  <span>Sunday</span>
                  <span>12:00 PM - 4:00 PM EST</span>
                </div>
              </div>
            </div>
            
            <div className={styles.hoursCard}>
              <h3>📱 Social Media</h3>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>
                  📘 Facebook
                </a>
                <a href="#" className={styles.socialLink}>
                  🐦 Twitter
                </a>
                <a href="#" className={styles.socialLink}>
                  📸 Instagram
                </a>
                <a href="#" className={styles.socialLink}>
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;