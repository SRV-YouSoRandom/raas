import React, { useState } from 'react';
import Button from '../common/Button';

const DeployForm = () => {
  const [formData, setFormData] = useState({
    organization: 'finnoweeb',
    rollupName: '',
    chainId: '',
    framework: 'op',
    settlement: 'base',
    dataAvailability: 'celestia',
    environment: 'testnet'
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">
          Organization
          <div className="tooltip-icon">ⓘ</div>
        </label>
        <div className="form-input-container">
          <input
            type="text"
            name="organization"
            className="form-input"
            value={formData.organization}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="form-group">
        <label className="form-label">
          Rollup name
          <div className="tooltip-icon">ⓘ</div>
        </label>
        <div className="form-input-container">
          <input
            type="text"
            name="rollupName"
            className="form-input"
            placeholder="e.g. Zora Network"
            value={formData.rollupName}
            onChange={handleChange}
          />
          <button type="button" className="input-action-btn">↻</button>
        </div>
      </div>
      
      <div className="form-group">
        <label className="form-label">
          Chain ID
          <div className="tooltip-icon">ⓘ</div>
        </label>
        <div className="form-input-container">
          <input
            type="text"
            name="chainId"
            className="form-input"
            value={formData.chainId}
            onChange={handleChange}
          />
        </div>
        <div className="form-error">This chain ID is already taken</div>
      </div>
      
      <div className="form-section-card">
        <h3 className="form-section-title">Build your stack</h3>
        
        <div className="form-group">
          <label className="form-label">
            Framework
            <div className="tooltip-icon">ⓘ</div>
          </label>
          <div className="radio-group">
            <label className={`radio-option ${formData.framework === 'op' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="framework"
                value="op"
                checked={formData.framework === 'op'}
                onChange={handleChange}
              />
              <div className="radio-content">
                <div className="radio-icon op">●</div>
                <span>OP Stack</span>
              </div>
            </label>
            
            <label className={`radio-option ${formData.framework === 'arbitrum' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="framework"
                value="arbitrum"
                checked={formData.framework === 'arbitrum'}
                onChange={handleChange}
              />
              <div className="radio-content">
                <div className="radio-icon arbitrum">◆</div>
                <span>Arbitrum Orbit</span>
              </div>
            </label>
          </div>
        </div>
        
        <div className="form-group">
          <label className="form-label">
            Settlement layer
            <div className="tooltip-icon">ⓘ</div>
          </label>
          <div className="radio-group">
            <label className={`radio-option ${formData.settlement === 'ethereum' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="settlement"
                value="ethereum"
                checked={formData.settlement === 'ethereum'}
                onChange={handleChange}
              />
              <div className="radio-content">
                <div className="radio-icon ethereum">◇</div>
                <span>Ethereum</span>
              </div>
            </label>
            
            <label className={`radio-option ${formData.settlement === 'base' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="settlement"
                value="base"
                checked={formData.settlement === 'base'}
                onChange={handleChange}
              />
              <div className="radio-content">
                <div className="radio-icon base">◯</div>
                <span>Base L2</span>
              </div>
            </label>
            
            <label className={`radio-option ${formData.settlement === 'zora' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="settlement"
                value="zora"
                checked={formData.settlement === 'zora'}
                onChange={handleChange}
              />
              <div className="radio-content">
                <div className="radio-icon zora">◎</div>
                <span>Zora L2</span>
              </div>
            </label>
            
            <label className={`radio-option ${formData.settlement === 'mode' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="settlement"
                value="mode"
                checked={formData.settlement === 'mode'}
                onChange={handleChange}
              />
              <div className="radio-content">
                <div className="radio-icon mode">◉</div>
                <span>Mode L2</span>
              </div>
            </label>
          </div>
        </div>
        
        <div className="form-group">
          <label className="form-label">
            Data availability
            <div className="tooltip-icon">ⓘ</div>
          </label>
          <div className="radio-group">
            <label className={`radio-option ${formData.dataAvailability === 'celestia' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="dataAvailability"
                value="celestia"
                checked={formData.dataAvailability === 'celestia'}
                onChange={handleChange}
              />
              <div className="radio-content">
                <div className="radio-icon celestia">✧</div>
                <span>Celestia DA</span>
              </div>
            </label>
            
            <label className={`radio-option ${formData.dataAvailability === 'eigen' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="dataAvailability"
                value="eigen"
                checked={formData.dataAvailability === 'eigen'}
                onChange={handleChange}
              />
              <div className="radio-content">
                <div className="radio-icon eigen">◈</div>
                <span>EigenDA</span>
              </div>
            </label>
          </div>
        </div>
        
        <div className="beta-notice">
          <span>This stack is considered Beta</span>
          <button type="button" className="why-button">Why? ⓘ</button>
        </div>
        
        <div className="customers-section">
          <div className="customers-title">Customers deployed with this stack</div>
          <div className="customer-icons">
            <div className="customer-icon">●</div>
            <div className="customer-icon">■</div>
            <div className="customer-icon">▲</div>
          </div>
          <button type="button" className="see-more-button">See more →</button>
        </div>
      </div>
      
      <div className="form-section-card">
        <h3 className="form-section-title">Choose your environment</h3>
        
        <div className="environment-options">
          <label className={`environment-option ${formData.environment === 'testnet' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="environment"
              value="testnet"
              checked={formData.environment === 'testnet'}
              onChange={handleChange}
            />
            <div className="environment-content">
              <div className="environment-header">
                <div className="environment-icon">⚙️</div>
                <h4 className="environment-name">Testnet</h4>
              </div>
              <p className="environment-description">
                Deploy a rollup on the Sepolia network. Best used as a persistent testnet and staging environment.
              </p>
              <div className="environment-pricing">
                Three months free then $250 / month
              </div>
            </div>
          </label>
          
          <label className={`environment-option ${formData.environment === 'mainnet' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="environment"
              value="mainnet"
              checked={formData.environment === 'mainnet'}
              onChange={handleChange}
            />
            <div className="environment-content">
              <div className="environment-header">
                <div className="environment-icon">🌐</div>
                <h4 className="environment-name">Mainnet</h4>
              </div>
              <p className="environment-description">
                Deploy a live network with genuine transactions and real economic value.
              </p>
              <div className="environment-pricing">
                $3,000 / month
              </div>
            </div>
          </label>
        </div>
      </div>
      
      <div className="form-section-card collapsible">
        <div className="collapsible-header">
          <h3 className="form-section-title">Advanced settings</h3>
          <button type="button" className="expand-button">▼</button>
        </div>
      </div>
    </form>
  );
};

export default DeployForm;