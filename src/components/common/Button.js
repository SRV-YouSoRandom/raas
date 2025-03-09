import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  fullWidth = false,
  type = 'button'
}) => {
  const baseStyle = {
    padding: '10px 16px',
    borderRadius: '6px',
    border: 'none',
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: '14px',
    width: fullWidth ? '100%' : 'auto',
  };

  const variants = {
    primary: {
      backgroundColor: '#22B1A6',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#f0f0f0',
      color: '#333',
      border: '1px solid #ddd',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#22B1A6',
      border: '1px solid #22B1A6',
    }
  };

  const buttonStyle = {
    ...baseStyle,
    ...variants[variant],
  };

  return (
    <button 
      style={buttonStyle}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;