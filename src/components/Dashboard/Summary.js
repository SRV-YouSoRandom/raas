import React from 'react';
import Button from '../common/Button';

const Summary = () => {
  return (
    <div className="summary-container">
      <h3 className="summary-title">SUMMARY</h3>
      
      <div className="summary-section">
        <h4 className="summary-section-title">What's included?</h4>
        
        <ul className="summary-list">
          <li className="summary-item">
            <div className="check-icon">✓</div>
            <div className="summary-text">
              Your own Testnet L3 on <span className="highlight">Base</span> (Sepolia)
            </div>
          </li>
          
          <li className="summary-item">
            <div className="check-icon">✓</div>
            <div className="summary-text">
              Built on <span className="highlight">OP Stack</span> with <span className="celestia-icon">✧</span> Celestia DA
            </div>
          </li>
          
          <li className="summary-item">
            <div className="check-icon">✓</div>
            <div className="summary-text">
              Built-in block explorer, tracer, faucet, and bridge
            </div>
          </li>
          
          <li className="summary-item">
            <div className="check-icon">✓</div>
            <div className="summary-text">
              Best-in-class security monitoring and architecture
            </div>
          </li>
          
          <li className="summary-item">
            <div className="check-icon">✓</div>
            <div className="summary-text">
              High-availability sequencing with AutoLedge Elector
            </div>
          </li>
          
          <li className="summary-item">
            <div className="check-icon">✓</div>
            <div className="summary-text">
              Hypermode RPC that scales with your usage
            </div>
          </li>
          
          <li className="summary-item">
            <div className="check-icon">✓</div>
            <div className="summary-text">
              Standard support
            </div>
          </li>
          
          <li className="summary-item">
            <div className="check-icon">✓</div>
            <div className="summary-text">
              99.9% uptime SLA
            </div>
          </li>
        </ul>
      </div>
      
      <div className="summary-section">
        <h4 className="summary-section-title">Costs and pricing</h4>
        
        <div className="cost-item">
          <div className="cost-label">
            Deployment cost
            <div className="tooltip-icon">ⓘ</div>
          </div>
          <div className="cost-value">$50</div>
        </div>
        
        <div className="cost-item">
          <div className="cost-label">Plan cost</div>
          <div className="cost-value">$0</div>
        </div>
        
        <div className="guidance-section">
          <div className="guidance-icon">ℹ️</div>
          <div className="guidance-text">Need more guidance?</div>
          <Button variant="outline">Request demo</Button>
        </div>
        
        <div className="deploy-time">
          <div className="time-label">Time to deploy</div>
          <div className="time-value">≈ 15 minutes</div>
        </div>
        
        <Button variant="primary" fullWidth>Continue</Button>
      </div>
    </div>
  );
};

export default Summary;