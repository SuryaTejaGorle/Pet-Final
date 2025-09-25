import React, { useState } from 'react';
import styles from './Dashboard.module.css';

function AdopterDashboard({ user }) {
  const [activeTab, setActiveTab] = useState('browse');
  const [filters, setFilters] = useState({
    species: '',
    breed: '',
    age: '',
    location: '',
    health: ''
  });

  // Mock data for demonstration
  const [pets] = useState([
    {
      id: 1,
      name: 'Buddy',
      species: 'dog',
      breed: 'Golden Retriever',
      age: '2 years',
      location: 'New York',
      health: 'excellent',
      status: 'available',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Friendly and energetic dog looking for an active family.',
      shelter: 'Happy Paws Shelter'
    },
    {
      id: 2,
      name: 'Whiskers',
      species: 'cat',
      breed: 'Persian',
      age: '1 year',
      location: 'California',
      health: 'good',
      status: 'available',
      image: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Calm and loving cat perfect for apartment living.',
      shelter: 'Feline Friends Rescue'
    },
    {
      id: 3,
      name: 'Max',
      species: 'dog',
      breed: 'Beagle',
      age: '3 years',
      location: 'Texas',
      health: 'excellent',
      status: 'available',
      image: 'https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Playful beagle who loves children and outdoor activities.',
      shelter: 'Austin Animal Center'
    }
  ]);

  const [applications] = useState([
    {
      id: 1,
      petId: 1,
      petName: 'Buddy',
      shelter: 'Happy Paws Shelter',
      status: 'pending',
      submittedDate: '2025-01-10',
      message: 'I would love to adopt Buddy for my family.'
    },
    {
      id: 2,
      petId: 2,
      petName: 'Whiskers',
      shelter: 'Feline Friends Rescue',
      status: 'approved',
      submittedDate: '2025-01-08',
      message: 'Looking forward to giving Whiskers a loving home.'
    }
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredPets = pets.filter(pet => {
    return (!filters.species || pet.species === filters.species) &&
           (!filters.breed || pet.breed.toLowerCase().includes(filters.breed.toLowerCase())) &&
           (!filters.age || pet.age.includes(filters.age)) &&
           (!filters.location || pet.location.toLowerCase().includes(filters.location.toLowerCase())) &&
           (!filters.health || pet.health === filters.health);
  });

  const handleAdopt = (petId) => {
    alert(`Adoption application submitted for pet ID: ${petId}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'var(--warning-color)';
      case 'approved': return 'var(--success-color)';
      case 'rejected': return 'var(--error-color)';
      default: return 'var(--neutral-500)';
    }
  };

  return (
    <div className={styles.dashboard}>
      <div className="container">
        <div className={styles.dashboardHeader}>
          <h1>Welcome back, {user.name}!</h1>
          <p>Find your perfect companion and track your adoption journey</p>
        </div>

        <div className={styles.dashboardNav}>
          <button
            className={`${styles.tabButton} ${activeTab === 'browse' ? styles.active : ''}`}
            onClick={() => setActiveTab('browse')}
          >
            Browse Pets
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'applications' ? styles.active : ''}`}
            onClick={() => setActiveTab('applications')}
          >
            My Applications ({applications.length})
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'favorites' ? styles.active : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            Favorites
          </button>
        </div>

        {activeTab === 'browse' && (
          <div className={styles.browseSection}>
            <div className={styles.filtersCard}>
              <h3>Filter Pets</h3>
              <div className={styles.filtersGrid}>
                <div className="form-group">
                  <label className="form-label">Species</label>
                  <select
                    name="species"
                    value={filters.species}
                    onChange={handleFilterChange}
                    className="form-select"
                  >
                    <option value="">All Species</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="bird">Bird</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Breed</label>
                  <input
                    type="text"
                    name="breed"
                    value={filters.breed}
                    onChange={handleFilterChange}
                    placeholder="Enter breed"
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Age</label>
                  <select
                    name="age"
                    value={filters.age}
                    onChange={handleFilterChange}
                    className="form-select"
                  >
                    <option value="">Any Age</option>
                    <option value="1">1 year</option>
                    <option value="2">2 years</option>
                    <option value="3">3 years</option>
                    <option value="4+">4+ years</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    placeholder="City or State"
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Health</label>
                  <select
                    name="health"
                    value={filters.health}
                    onChange={handleFilterChange}
                    className="form-select"
                  >
                    <option value="">Any Health Status</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={styles.petsGrid}>
              {filteredPets.map(pet => (
                <div key={pet.id} className={styles.petCard}>
                  <div className={styles.petImage}>
                    <img src={pet.image} alt={pet.name} />
                    <div className={styles.petStatus}>{pet.status}</div>
                  </div>
                  <div className={styles.petInfo}>
                    <h3>{pet.name}</h3>
                    <div className={styles.petDetails}>
                      <span className={styles.petDetail}>🐾 {pet.breed}</span>
                      <span className={styles.petDetail}>🎂 {pet.age}</span>
                      <span className={styles.petDetail}>📍 {pet.location}</span>
                      <span className={styles.petDetail}>❤️ {pet.health}</span>
                    </div>
                    <p className={styles.petDescription}>{pet.description}</p>
                    <div className={styles.shelterInfo}>
                      <small>Listed by: {pet.shelter}</small>
                    </div>
                  </div>
                  <div className={styles.petActions}>
                    <button
                      onClick={() => handleAdopt(pet.id)}
                      className="btn btn-primary"
                    >
                      Apply to Adopt
                    </button>
                    <button className="btn btn-secondary">
                      Add to Favorites
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div className={styles.applicationsSection}>
            <h2>My Adoption Applications</h2>
            {applications.length === 0 ? (
              <div className={styles.emptyState}>
                <p>You haven't submitted any adoption applications yet.</p>
                <button
                  onClick={() => setActiveTab('browse')}
                  className="btn btn-primary"
                >
                  Browse Pets
                </button>
              </div>
            ) : (
              <div className={styles.applicationsList}>
                {applications.map(application => (
                  <div key={application.id} className={styles.applicationCard}>
                    <div className={styles.applicationHeader}>
                      <h3>{application.petName}</h3>
                      <span
                        className={styles.applicationStatus}
                        style={{ color: getStatusColor(application.status) }}
                      >
                        {application.status.toUpperCase()}
                      </span>
                    </div>
                    <div className={styles.applicationDetails}>
                      <p><strong>Shelter:</strong> {application.shelter}</p>
                      <p><strong>Submitted:</strong> {application.submittedDate}</p>
                      <p><strong>Message:</strong> {application.message}</p>
                    </div>
                    <div className={styles.applicationActions}>
                      {application.status === 'approved' && (
                        <button className="btn btn-success">
                          Complete Adoption
                        </button>
                      )}
                      <button className="btn btn-secondary">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'favorites' && (
          <div className={styles.favoritesSection}>
            <h2>My Favorite Pets</h2>
            <div className={styles.emptyState}>
              <p>You haven't added any pets to your favorites yet.</p>
              <button
                onClick={() => setActiveTab('browse')}
                className="btn btn-primary"
              >
                Browse Pets
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdopterDashboard;