"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthModalContextType {
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined);

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <AuthModalContext.Provider value={{ showAuthModal, setShowAuthModal }}>
      {children}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const context = useContext(AuthModalContext);
  if (context === undefined) {
    throw new Error('useAuthModal must be used within an AuthModalProvider');
  }
  return context;
} 