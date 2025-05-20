"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { useWeb3Auth } from '../hooks/useWeb3Auth';

// Create the context
interface WalletContextType {
  user: any;
  connected: boolean;
  loading: boolean;
  getUserBalance: () => Promise<string>;
  signMessage: (message: string) => Promise<string>;
  logout: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

// Create the provider component
export function WalletProvider({ children }: { children: ReactNode }) {
  const web3Auth = useWeb3Auth();

  return (
    <WalletContext.Provider value={web3Auth}>
      {children}
    </WalletContext.Provider>
  );
}

// Create a custom hook to use the wallet context
export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}

// Create a HOC for components that require wallet connection
export function withWallet<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithWalletComponent(props: P) {
    const { connected } = useWallet();

    if (!connected) {
      return (
        <div className="flex items-center justify-center min-h-[200px]">
          <p className="text-gray-500">Please connect your wallet to continue</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
} 