import React from 'react';
import Logo from '../common/Logo';
import DeployForm from './DeployForm';
import Summary from './Summary';
import './Dashboard.css';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <Logo size="small" />
        <div className="user-menu">
          <span>{user}</span>
          <button className="dropdown-button">▼</button>
        </div>
      </header>
      
      <main className="dashboard-content">
        <h1 className="dashboard-title">Deploy a rollup</h1>
        
        <div className="dashboard-layout">
          <div className="form-section">
            <DeployForm />
          </div>
          
          <div className="summary-section">
            <Summary />
          </div>
        </div>
      </main>
      
      <footer className="dashboard-footer">
        <div className="footer-links">
          <button className="footer-link">Schedule a demo</button>
          <button className="footer-link">Docs</button>
          <button className="footer-link">Blog</button>
          <button className="footer-link">Jobs</button>
          <button className="footer-link">Contact support</button>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;