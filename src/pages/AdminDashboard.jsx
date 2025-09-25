import React, { useState } from 'react';
import styles from './Dashboard.module.css';

function AdminDashboard({ user }) {
  const [activeTab, setActiveTab] = useState('users');
  
  const [users] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john@email.com',
      role: 'adopter',
      status: 'active',
      joinDate: '2025-01-05',
      lastLogin: '2025-01-10'
    },
    {
      id: 2,
      name: 'Happy Paws Shelter',
      email: 'info@happypaws.com',
      role: 'shelter',
      status: 'pending',
      joinDate: '2025-01-03',
      lastLogin: '2025-01-09',
      isVerified: false
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      email: 'sarah@email.com',
      role: 'adopter',
      status: 'active',
      joinDate: '2025-01-01',
      lastLogin: '2025-01-08'
    },
    {
      id: 4,
      name: 'Animal Friends Rescue',
      email: 'contact@animalfriends.org',
      role: 'shelter',
      status: 'active',
      joinDate: '2024-12-20',
      lastLogin: '2025-01-07',
      isVerified: true
    }
  ]);

  const [reports] = useState([
    {
      id: 1,
      type: 'pet',
      reportedItem: 'Pet: Buddy (ID: 1)',
      reportedBy: 'user@email.com',
      reason: 'Misleading information',
      status: 'pending',
      date: '2025-01-08'
    },
    {
      id: 2,
      type: 'user',
      reportedItem: 'User: baduser@email.com',
      reportedBy: 'concerned@email.com',
      reason: 'Suspicious behavior',
      status: 'under review',
      date: '2025-01-07'
    }
  ]);

  const handleUserAction = (userId, action) => {
    alert(`User ${action}: ${userId}`);
  };

  const handleShelterVerification = (userId, action) => {
    alert(`Shelter ${action}: ${userId}`);
  };

  const handleReportAction = (reportId, action) => {
    alert(`Report ${action}: ${reportId}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'var(--success-color)';
      case 'pending': return 'var(--warning-color)';
      case 'suspended': return 'var(--error-color)';
      case 'under review': return 'var(--primary-color)';
      default: return 'var(--neutral-500)';
    }
  };

  const getUserStats = () => {
    const adopters = users.filter(user => user.role === 'adopter').length;
    const shelters = users.filter(user => user.role === 'shelter').length;
    const pendingShelters = users.filter(user => user.role === 'shelter' && user.status === 'pending').length;
    
    return { adopters, shelters, pendingShelters };
  };

  const stats = getUserStats();

  return (
    <div className={styles.dashboard}>
      <div className="container">
        <div className={styles.dashboardHeader}>
          <h1>Admin Dashboard</h1>
          <p>Manage users, verify shelters, and handle reports</p>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{users.length}</div>
            <div className={styles.statLabel}>Total Users</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{stats.adopters}</div>
            <div className={styles.statLabel}>Adopters</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{stats.shelters}</div>
            <div className={styles.statLabel}>Shelters</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{stats.pendingShelters}</div>
            <div className={styles.statLabel}>Pending Verification</div>
          </div>
        </div>

        <div className={styles.dashboardNav}>
          <button
            className={`${styles.tabButton} ${activeTab === 'users' ? styles.active : ''}`}
            onClick={() => setActiveTab('users')}
          >
            Manage Users
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'verification' ? styles.active : ''}`}
            onClick={() => setActiveTab('verification')}
          >
            Shelter Verification ({stats.pendingShelters})
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'reports' ? styles.active : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            Reports ({reports.length})
          </button>
        </div>

        {activeTab === 'users' && (
          <div className={styles.usersSection}>
            <h2>User Management</h2>
            <div className={styles.usersTable}>
              <div className={styles.tableHeader}>
                <div>User</div>
                <div>Role</div>
                <div>Status</div>
                <div>Join Date</div>
                <div>Last Login</div>
                <div>Actions</div>
              </div>
              {users.map(user => (
                <div key={user.id} className={styles.tableRow}>
                  <div className={styles.userInfo}>
                    <strong>{user.name}</strong>
                    <small>{user.email}</small>
                  </div>
                  <div className={styles.userRole}>
                    {user.role}
                    {user.role === 'shelter' && (
                      <span className={user.isVerified ? styles.verified : styles.unverified}>
                        {user.isVerified ? '✓ Verified' : '⚠ Unverified'}
                      </span>
                    )}
                  </div>
                  <div
                    className={styles.userStatus}
                    style={{ color: getStatusColor(user.status) }}
                  >
                    {user.status}
                  </div>
                  <div>{user.joinDate}</div>
                  <div>{user.lastLogin}</div>
                  <div className={styles.userActions}>
                    <button
                      onClick={() => handleUserAction(user.id, 'suspend')}
                      className={`btn btn-error ${styles.actionButton}`}
                    >
                      Suspend
                    </button>
                    <button className={`btn btn-secondary ${styles.actionButton}`}>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'verification' && (
          <div className={styles.verificationSection}>
            <h2>Shelter Verification</h2>
            {users.filter(user => user.role === 'shelter' && !user.isVerified).length === 0 ? (
              <div className={styles.emptyState}>
                <p>No shelters pending verification.</p>
              </div>
            ) : (
              <div className={styles.verificationList}>
                {users
                  .filter(user => user.role === 'shelter' && !user.isVerified)
                  .map(shelter => (
                    <div key={shelter.id} className={styles.verificationCard}>
                      <div className={styles.shelterInfo}>
                        <h3>{shelter.name}</h3>
                        <p><strong>Email:</strong> {shelter.email}</p>
                        <p><strong>Applied:</strong> {shelter.joinDate}</p>
                        <p><strong>Status:</strong> 
                          <span style={{ color: getStatusColor(shelter.status) }}>
                            {shelter.status}
                          </span>
                        </p>
                      </div>
                      <div className={styles.verificationActions}>
                        <button
                          onClick={() => handleShelterVerification(shelter.id, 'approved')}
                          className="btn btn-success"
                        >
                          Verify Shelter
                        </button>
                        <button
                          onClick={() => handleShelterVerification(shelter.id, 'rejected')}
                          className="btn btn-error"
                        >
                          Reject
                        </button>
                        <button className="btn btn-secondary">
                          Request More Info
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'reports' && (
          <div className={styles.reportsSection}>
            <h2>User Reports</h2>
            {reports.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No reports to review.</p>
              </div>
            ) : (
              <div className={styles.reportsList}>
                {reports.map(report => (
                  <div key={report.id} className={styles.reportCard}>
                    <div className={styles.reportHeader}>
                      <h3>Report #{report.id}</h3>
                      <span
                        className={styles.reportStatus}
                        style={{ color: getStatusColor(report.status) }}
                      >
                        {report.status}
                      </span>
                    </div>
                    <div className={styles.reportDetails}>
                      <p><strong>Type:</strong> {report.type}</p>
                      <p><strong>Reported Item:</strong> {report.reportedItem}</p>
                      <p><strong>Reported By:</strong> {report.reportedBy}</p>
                      <p><strong>Reason:</strong> {report.reason}</p>
                      <p><strong>Date:</strong> {report.date}</p>
                    </div>
                    <div className={styles.reportActions}>
                      <button
                        onClick={() => handleReportAction(report.id, 'resolved')}
                        className="btn btn-success"
                      >
                        Resolve
                      </button>
                      <button
                        onClick={() => handleReportAction(report.id, 'dismissed')}
                        className="btn btn-secondary"
                      >
                        Dismiss
                      </button>
                      <button className="btn btn-primary">
                        Investigate
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

export default AdminDashboard;