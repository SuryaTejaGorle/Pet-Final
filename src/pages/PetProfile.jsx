import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './PetProfile.module.css';

function PetProfile() {
  const { id } = useParams();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  
  // Mock pet data - in real app, fetch by ID
  const pet = {
    id: parseInt(id),
    name: 'Buddy',
    species: 'dog',
    breed: 'Golden Retriever',
    age: '2 years',
    gender: 'Male',
    size: 'Large',
    weight: '65 lbs',
    location: 'New York, NY',
    health: 'excellent',
    status: 'available',
    images: [
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Buddy is a friendly and energetic Golden Retriever looking for an active family. He loves playing fetch, going on long walks, and swimming. Buddy is great with children and other dogs. He is house-trained and knows basic commands like sit, stay, and come.',
    personality: ['Friendly', 'Energetic', 'Loyal', 'Playful', 'Good with kids'],
    vaccinations: ['Rabies', 'DHPP', 'Bordetella'],
    microchipped: true,
    spayedNeutered: true,
    specialNeeds: 'None',
    shelter: {
      name: 'Happy Paws Shelter',
      address: '123 Main Street, New York, NY 10001',
      phone: '(555) 123-4567',
      email: 'info@happypaws.com',
      website: 'www.happypaws.com'
    },
    dateAdded: '2025-01-05',
    adoptionFee: 350
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    housingType: '',
    hasYard: '',
    otherPets: '',
    experience: '',
    reason: '',
    availability: ''
  });

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully! The shelter will contact you soon.');
    setShowApplicationForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === pet.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? pet.images.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.petProfile}>
      <div className="container">
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/browse-pets">Browse Pets</Link>
          <span>›</span>
          <span>{pet.name}</span>
        </nav>

        <div className={styles.profileContent}>
          {/* Pet Images */}
          <div className={styles.imageSection}>
            <div className={styles.mainImage}>
              <img src={pet.images[currentImageIndex]} alt={pet.name} />
              {pet.images.length > 1 && (
                <>
                  <button className={styles.imageNav} onClick={prevImage}>
                    ❮
                  </button>
                  <button className={`${styles.imageNav} ${styles.next}`} onClick={nextImage}>
                    ❯
                  </button>
                </>
              )}
              <div className={styles.imageStatus}>
                {pet.status}
              </div>
            </div>
            {pet.images.length > 1 && (
              <div className={styles.imageGallery}>
                {pet.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${pet.name} ${index + 1}`}
                    className={index === currentImageIndex ? styles.active : ''}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Pet Information */}
          <div className={styles.petInfo}>
            <div className={styles.petHeader}>
              <h1>{pet.name}</h1>
              <div className={styles.petBasics}>
                <span className={styles.breed}>{pet.breed}</span>
                <span className={styles.age}>{pet.age}</span>
                <span className={styles.gender}>{pet.gender}</span>
              </div>
              <div className={styles.location}>📍 {pet.location}</div>
            </div>

            {/* Quick Facts */}
            <div className={styles.quickFacts}>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Size</span>
                <span className={styles.factValue}>{pet.size}</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Weight</span>
                <span className={styles.factValue}>{pet.weight}</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Health</span>
                <span className={styles.factValue}>{pet.health}</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Adoption Fee</span>
                <span className={styles.factValue}>${pet.adoptionFee}</span>
              </div>
            </div>

            {/* Actions */}
            <div className={styles.actions}>
              <button
                onClick={() => setShowApplicationForm(true)}
                className="btn btn-primary"
              >
                Apply to Adopt
              </button>
              <button className="btn btn-secondary">
                Add to Favorites
              </button>
              <button className="btn btn-accent">
                Share Pet
              </button>
            </div>

            {/* Description */}
            <div className={styles.description}>
              <h3>About {pet.name}</h3>
              <p>{pet.description}</p>
            </div>

            {/* Personality */}
            <div className={styles.personality}>
              <h3>Personality Traits</h3>
              <div className={styles.traits}>
                {pet.personality.map((trait, index) => (
                  <span key={index} className={styles.trait}>
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className={styles.detailsSection}>
          <div className={styles.detailsGrid}>
            {/* Medical Information */}
            <div className={styles.detailCard}>
              <h3>🏥 Medical Information</h3>
              <div className={styles.medicalInfo}>
                <div className={styles.medicalItem}>
                  <strong>Vaccinations:</strong>
                  <ul>
                    {pet.vaccinations.map((vaccine, index) => (
                      <li key={index}>{vaccine}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.medicalItem}>
                  <strong>Microchipped:</strong>
                  <span className={pet.microchipped ? styles.yes : styles.no}>
                    {pet.microchipped ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className={styles.medicalItem}>
                  <strong>Spayed/Neutered:</strong>
                  <span className={pet.spayedNeutered ? styles.yes : styles.no}>
                    {pet.spayedNeutered ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className={styles.medicalItem}>
                  <strong>Special Needs:</strong> {pet.specialNeeds}
                </div>
              </div>
            </div>

            {/* Shelter Information */}
            <div className={styles.detailCard}>
              <h3>🏠 Shelter Information</h3>
              <div className={styles.shelterInfo}>
                <h4>{pet.shelter.name}</h4>
                <p>📍 {pet.shelter.address}</p>
                <p>📞 {pet.shelter.phone}</p>
                <p>📧 {pet.shelter.email}</p>
                <p>🌐 <a href={`https://${pet.shelter.website}`} target="_blank" rel="noopener noreferrer">
                  {pet.shelter.website}
                </a></p>
                <div className={styles.listingDate}>
                  <strong>Listed:</strong> {pet.dateAdded}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Modal */}
        {showApplicationForm && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h3>Adoption Application for {pet.name}</h3>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className={styles.closeButton}
                >
                  ×
                </button>
              </div>
              <form onSubmit={handleApplicationSubmit} className={styles.applicationForm}>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={applicationData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Housing Type *</label>
                    <select
                      name="housingType"
                      value={applicationData.housingType}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select Housing Type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="condo">Condo</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Address *</label>
                  <textarea
                    name="address"
                    value={applicationData.address}
                    onChange={handleInputChange}
                    className="form-input"
                    rows="2"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Do you have a yard? *</label>
                  <select
                    name="hasYard"
                    value={applicationData.hasYard}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select Option</option>
                    <option value="yes-fenced">Yes, fenced</option>
                    <option value="yes-unfenced">Yes, not fenced</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Do you have other pets?</label>
                  <textarea
                    name="otherPets"
                    value={applicationData.otherPets}
                    onChange={handleInputChange}
                    className="form-input"
                    rows="2"
                    placeholder="Please describe any other pets you have"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Experience with pets *</label>
                  <textarea
                    name="experience"
                    value={applicationData.experience}
                    onChange={handleInputChange}
                    className="form-input"
                    rows="3"
                    placeholder="Describe your experience with pets"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Why do you want to adopt {pet.name}? *</label>
                  <textarea
                    name="reason"
                    value={applicationData.reason}
                    onChange={handleInputChange}
                    className="form-input"
                    rows="3"
                    placeholder="Tell us why you'd like to adopt this pet"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Availability for pet care *</label>
                  <textarea
                    name="availability"
                    value={applicationData.availability}
                    onChange={handleInputChange}
                    className="form-input"
                    rows="2"
                    placeholder="Describe your schedule and availability"
                    required
                  />
                </div>

                <div className={styles.formActions}>
                  <button type="submit" className="btn btn-primary">
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PetProfile;