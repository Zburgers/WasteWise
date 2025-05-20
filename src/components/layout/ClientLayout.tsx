"use client";

import { useWallet } from '../../context/WalletContext';
import AuthModal from '../AuthModal';
import { useAuthModal } from '@/hooks/useAuthModal';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { showAuthModal, setShowAuthModal } = useAuthModal();
  const { connected } = useWallet();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <AuthModal
        open={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onConnectionSuccess={(user) => {
          console.log('User connected:', user);
          setShowAuthModal(false);
        }}
      />
    </QueryClientProvider>
  );
} 