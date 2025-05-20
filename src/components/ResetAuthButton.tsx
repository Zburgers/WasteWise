"use client";

import React from 'react';
import { Button } from './ui/button';

interface ResetAuthButtonProps {
  className?: string;
}

const ResetAuthButton: React.FC<ResetAuthButtonProps> = ({ className }) => {
  const handleReset = async () => {
    try {
      // Import the auth reset utility directly
      const { forceResetAuth } = await import('../lib/auth-reset');
      
      // Reset the authentication state
      forceResetAuth();
      
      // Reload the page to ensure a clean state
      window.location.reload();
    } catch (error) {
      console.error("Error resetting authentication:", error);
      alert("Failed to reset authentication. Please try refreshing the page.");
    }
  };

  return (
    <Button 
      variant="outline" 
      className={className} 
      onClick={handleReset}
    >
      Reset Login
    </Button>
  );
};

export default ResetAuthButton;
