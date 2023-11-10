'use client'
import { Button } from '@mui/material';
import React from 'react';

// Define the component
const GradientButton: React.FC<{ onClick?: () => void; children?: React.ReactNode }> = ({ onClick, children }) => {

  return (
    <Button
      onClick={onClick}
      style={{
        backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // Adjust colors as needed
        padding: '10px 20px',
        borderRadius: 8,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', // Optional: Add a box shadow
        borderWidth: 0,
        color : "white",
        fontSize : 24
      }}>
      {children}
    </Button>
  );
};

export default GradientButton;
