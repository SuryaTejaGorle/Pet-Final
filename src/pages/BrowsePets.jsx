import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './BrowsePets.module.css';

function BrowsePets() {
  const [filters, setFilters] = useState({
    species: '',
    breed: '',
    age: '',
    location: '',
    health: ''
  });

  const [pets] = useState([
    {
      id: 1,
      name: 'Buddy',
      species: 'dog',
      breed: 'Golden Retriever',
      age: '2 years',
      location: 'New York, NY',
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
      location: 'Los Angeles, CA',
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
      location: 'Austin, TX',
      health: 'excellent',
      status: 'available',
      image: 'https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Playful beagle who loves children and outdoor activities.',
      shelter: 'Austin Animal Center'
    },
    {
      id: 4,
      name: 'Luna',
      species: 'cat',
      breed: 'Siamese',
      age: '2 years',
      location: 'Miami, FL',
      health: 'excellent',
      status: 'available',
      image: 'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Beautiful and intelligent cat who loves to play.',
      shelter: 'Sunshine Animal Rescue'
    },
    {
      id: 5,
      name: 'Charlie',
      species: 'dog',
      breed: 'Labrador Mix',
      age: '4 years',
      location: 'Seattle, WA',
      health: 'good',
      status: 'available',
      image: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Gentle giant who loves swimming and long walks.',
      shelter: 'Pacific Northwest Pet Rescue'
    },
    {
      id: 6,
      name: 'Bella',
      species: 'dog',
      breed: 'Border Collie',
      age: '1 year',
      location: 'Denver, CO',
      health: 'excellent',
      status: 'available',
      image: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Energetic and intelligent dog perfect for active families.',
      shelter: 'Mountain Pet Rescue'
    }
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      species: '',
      breed: '',
      age: '',
      location: '',
      health: ''
    });
  };

  const filteredPets = pets.filter(pet => {
    return (!filters.species || pet.species === filters.species) &&
           (!filters.breed || pet.breed.toLowerCase().includes(filters.breed.toLowerCase())) &&
           (!filters.age || pet.age.includes(filters.age)) &&
           (!filters.location || pet.location.toLowerCase().includes(filters.location.toLowerCase())) &&
           (!filters.health || pet.health === filters.health);
  });

  return (
    <div className={styles.browsePage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Browse Pets</h1>
          <p>Find your perfect companion from our network of verified shelters</p>
          <div className={styles.resultsCount}>
            Showing {filteredPets.length} of {pets.length} available pets
          </div>
        </div>

        <div className={styles.pageContent}>
          <aside className={styles.filtersPanel}>
            <div className={styles.filtersHeader}>
              <h3>Filter Results</h3>
              <button onClick={clearFilters} className={styles.clearFilters}>
                Clear All
              </button>
            </div>

            <div className={styles.filterGroup}>
              <label className="form-label">Species</label>
              <select
                name="species"
                value={filters.species}
                onChange={handleFilterChange}
                className="form-select"
              >
                <option value="">All Species</option>
                <option value="dog">Dogs</option>
                <option value="cat">Cats</option>
                <option value="rabbit">Rabbits</option>
                <option value="bird">Birds</option>
              </select>
            </div>

            <div className={styles.filterGroup}>
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

            <div className={styles.filterGroup}>
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
                <option value="4">4+ years</option>
              </select>
            </div>

            <div className={styles.filterGroup}>
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

            <div className={styles.filterGroup}>
              <label className="form-label">Health Status</label>
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

            <div className={styles.quickFilters}>
              <h4>Quick Filters</h4>
              <div className={styles.quickFilterButtons}>
                <button
                  onClick={() => setFilters({...filters, species: 'dog'})}
                  className={`${styles.quickFilter} ${filters.species === 'dog' ? styles.active : ''}`}
                >
                  🐕 Dogs
                </button>
                <button
                  onClick={() => setFilters({...filters, species: 'cat'})}
                  className={`${styles.quickFilter} ${filters.species === 'cat' ? styles.active : ''}`}
                >
                  🐱 Cats
                </button>
                <button
                  onClick={() => setFilters({...filters, age: '1'})}
                  className={`${styles.quickFilter} ${filters.age === '1' ? styles.active : ''}`}
                >
                  🐾 Young
                </button>
                <button
                  onClick={() => setFilters({...filters, health: 'excellent'})}
                  className={`${styles.quickFilter} ${filters.health === 'excellent' ? styles.active : ''}`}
                >
                  ❤️ Healthy
                </button>
              </div>
            </div>
          </aside>

          <main className={styles.petsSection}>
            {filteredPets.length === 0 ? (
              <div className={styles.noResults}>
                <h3>No pets found</h3>
                <p>Try adjusting your filters to see more results.</p>
                <button onClick={clearFilters} className="btn btn-primary">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={styles.petsGrid}>
                {filteredPets.map(pet => (
                  <Link
                    key={pet.id}
                    to={`/pet/${pet.id}`}
                    className={styles.petCard}
                  >
                    <div className={styles.petImage}>
                      <img src={pet.image} alt={pet.name} />
                      <div className={styles.petStatus}>{pet.status}</div>
                    </div>
                    <div className={styles.petInfo}>
                      <h3>{pet.name}</h3>
                      <div className={styles.petMeta}>
                        <span className={styles.petBreed}>{pet.breed}</span>
                        <span className={styles.petAge}>{pet.age}</span>
                      </div>
                      <p className={styles.petLocation}>📍 {pet.location}</p>
                      <p className={styles.petDescription}>{pet.description}</p>
                      <div className={styles.petFooter}>
                        <small className={styles.shelterName}>{pet.shelter}</small>
                        <div className={styles.healthBadge}>
                          <span className={`${styles.healthIndicator} ${styles[pet.health]}`}>
                            {pet.health}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default BrowsePets;