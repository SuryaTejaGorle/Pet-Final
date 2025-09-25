import React, { useState } from 'react';
import styles from './Dashboard.module.css';

function ShelterDashboard({ user }) {
  const [activeTab, setActiveTab] = useState('pets');
  const [showAddPetForm, setShowAddPetForm] = useState(false);
  
  const [pets, setPets] = useState([
    {
      id: 1,
      name: 'Buddy',
      species: 'dog',
      breed: 'Golden Retriever',
      age: '2 years',
      health: 'excellent',
      status: 'available',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Friendly and energetic dog looking for an active family.',
      dateAdded: '2025-01-05'
    },
    {
      id: 2,
      name: 'Max',
      species: 'dog',
      breed: 'Beagle',
      age: '3 years',
      health: 'excellent',
      status: 'pending',
      image: 'https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Playful beagle who loves children and outdoor activities.',
      dateAdded: '2025-01-03'
    }
  ]);

  const [adoptionRequests] = useState([
    {
      id: 1,
      petId: 1,
      petName: 'Buddy',
      adopterName: 'John Smith',
      adopterEmail: 'john@email.com',
      adopterPhone: '(555) 123-4567',
      status: 'pending',
      submittedDate: '2025-01-10',
      message: 'I would love to adopt Buddy for my family. We have a large backyard and plenty of time to care for him.'
    },
    {
      id: 2,
      petId: 2,
      petName: 'Max',
      adopterName: 'Sarah Johnson',
      adopterEmail: 'sarah@email.com',
      adopterPhone: '(555) 987-6543',
      status: 'pending',
      submittedDate: '2025-01-09',
      message: 'Max looks like the perfect companion for our family. We have experience with beagles.'
    }
  ]);

  const [newPet, setNewPet] = useState({
    name: '',
    species: 'dog',
    breed: '',
    age: '',
    health: 'good',
    description: '',
    image: ''
  });

  const handleAddPet = (e) => {
    e.preventDefault();
    const pet = {
      ...newPet,
      id: Date.now(),
      status: 'available',
      dateAdded: new Date().toISOString().split('T')[0]
    };
    setPets([...pets, pet]);
    setNewPet({
      name: '',
      species: 'dog',
      breed: '',
      age: '',
      health: 'good',
      description: '',
      image: ''
    });
    setShowAddPetForm(false);
    alert('Pet added successfully!');
  };

  const handleDeletePet = (petId) => {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      setPets(pets.filter(pet => pet.id !== petId));
    }
  };

  const handleRequestAction = (requestId, action) => {
    alert(`Adoption request ${action}: ${requestId}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'var(--success-color)';
      case 'pending': return 'var(--warning-color)';
      case 'adopted': return 'var(--primary-color)';
      default: return 'var(--neutral-500)';
    }
  };

  return (
    <div className={styles.dashboard}>
      <div className="container">
        <div className={styles.dashboardHeader}>
          <h1>Shelter Dashboard</h1>
          <p>Manage your pets and adoption requests</p>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{pets.length}</div>
            <div className={styles.statLabel}>Total Pets</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              {pets.filter(pet => pet.status === 'available').length}
            </div>
            <div className={styles.statLabel}>Available</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{adoptionRequests.length}</div>
            <div className={styles.statLabel}>Pending Requests</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>0</div>
            <div className={styles.statLabel}>Adopted This Month</div>
          </div>
        </div>

        <div className={styles.dashboardNav}>
          <button
            className={`${styles.tabButton} ${activeTab === 'pets' ? styles.active : ''}`}
            onClick={() => setActiveTab('pets')}
          >
            My Pets ({pets.length})
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'requests' ? styles.active : ''}`}
            onClick={() => setActiveTab('requests')}
          >
            Adoption Requests ({adoptionRequests.length})
          </button>
        </div>

        {activeTab === 'pets' && (
          <div className={styles.petsManagement}>
            <div className={styles.sectionHeader}>
              <h2>Manage Pets</h2>
              <button
                onClick={() => setShowAddPetForm(true)}
                className="btn btn-primary"
              >
                Add New Pet
              </button>
            </div>

            {showAddPetForm && (
              <div className={styles.modal}>
                <div className={styles.modalContent}>
                  <div className={styles.modalHeader}>
                    <h3>Add New Pet</h3>
                    <button
                      onClick={() => setShowAddPetForm(false)}
                      className={styles.closeButton}
                    >
                      ×
                    </button>
                  </div>
                  <form onSubmit={handleAddPet} className={styles.petForm}>
                    <div className="form-group">
                      <label className="form-label">Pet Name</label>
                      <input
                        type="text"
                        value={newPet.name}
                        onChange={(e) => setNewPet({...newPet, name: e.target.value})}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Species</label>
                      <select
                        value={newPet.species}
                        onChange={(e) => setNewPet({...newPet, species: e.target.value})}
                        className="form-select"
                      >
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
                        value={newPet.breed}
                        onChange={(e) => setNewPet({...newPet, breed: e.target.value})}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Age</label>
                      <input
                        type="text"
                        value={newPet.age}
                        onChange={(e) => setNewPet({...newPet, age: e.target.value})}
                        className="form-input"
                        placeholder="e.g., 2 years, 6 months"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Health Status</label>
                      <select
                        value={newPet.health}
                        onChange={(e) => setNewPet({...newPet, health: e.target.value})}
                        className="form-select"
                      >
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Description</label>
                      <textarea
                        value={newPet.description}
                        onChange={(e) => setNewPet({...newPet, description: e.target.value})}
                        className="form-input"
                        rows="4"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Photo URL</label>
                      <input
                        type="url"
                        value={newPet.image}
                        onChange={(e) => setNewPet({...newPet, image: e.target.value})}
                        className="form-input"
                        placeholder="https://example.com/pet-photo.jpg"
                      />
                    </div>
                    <div className={styles.formActions}>
                      <button type="submit" className="btn btn-primary">
                        Add Pet
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowAddPetForm(false)}
                        className="btn btn-secondary"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            <div className={styles.petsGrid}>
              {pets.map(pet => (
                <div key={pet.id} className={styles.petCard}>
                  <div className={styles.petImage}>
                    <img src={pet.image || 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=400'} alt={pet.name} />
                    <div
                      className={styles.petStatus}
                      style={{ backgroundColor: getStatusColor(pet.status) }}
                    >
                      {pet.status}
                    </div>
                  </div>
                  <div className={styles.petInfo}>
                    <h3>{pet.name}</h3>
                    <div className={styles.petDetails}>
                      <span className={styles.petDetail}>🐾 {pet.breed}</span>
                      <span className={styles.petDetail}>🎂 {pet.age}</span>
                      <span className={styles.petDetail}>❤️ {pet.health}</span>
                    </div>
                    <p className={styles.petDescription}>{pet.description}</p>
                    <small>Added: {pet.dateAdded}</small>
                  </div>
                  <div className={styles.petActions}>
                    <button className="btn btn-secondary">Edit</button>
                    <button
                      onClick={() => handleDeletePet(pet.id)}
                      className="btn btn-error"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'requests' && (
          <div className={styles.requestsSection}>
            <h2>Adoption Requests</h2>
            {adoptionRequests.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No adoption requests yet.</p>
              </div>
            ) : (
              <div className={styles.requestsList}>
                {adoptionRequests.map(request => (
                  <div key={request.id} className={styles.requestCard}>
                    <div className={styles.requestHeader}>
                      <h3>Adoption Request for {request.petName}</h3>
                      <span className={styles.requestDate}>
                        {request.submittedDate}
                      </span>
                    </div>
                    <div className={styles.requestDetails}>
                      <div className={styles.adopterInfo}>
                        <h4>Adopter Information:</h4>
                        <p><strong>Name:</strong> {request.adopterName}</p>
                        <p><strong>Email:</strong> {request.adopterEmail}</p>
                        <p><strong>Phone:</strong> {request.adopterPhone}</p>
                      </div>
                      <div className={styles.requestMessage}>
                        <h4>Message:</h4>
                        <p>{request.message}</p>
                      </div>
                    </div>
                    <div className={styles.requestActions}>
                      <button
                        onClick={() => handleRequestAction(request.id, 'approved')}
                        className="btn btn-success"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleRequestAction(request.id, 'rejected')}
                        className="btn btn-error"
                      >
                        Reject
                      </button>
                      <button className="btn btn-secondary">
                        Contact Adopter
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShelterDashboard;