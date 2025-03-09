import React from 'react';

const Logo = ({ size = 'medium' }) => {
  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontWeight: 'bold',
    fontSize: size === 'small' ? '18px' : '24px',
  };

  const flowerStyle = {
    display: 'inline-block',
    fontSize: size === 'small' ? '20px' : '28px',
  };

  return (
    <div style={logoStyle}>
      <span>AutoLedge</span>
    </div>
  );
};

export default Logo;