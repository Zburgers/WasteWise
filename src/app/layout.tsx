import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import ClientLayout from '@/components/layout/ClientLayout';
import { AuthModalProvider } from '@/hooks/useAuthModal';
import { WalletProvider } from '../context/WalletContext';
import ClientErrorBoundary from '@/components/ClientErrorBoundary';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WasteWise - AI Waste Solutions',
  description: 'Revolutionizing waste management with AI for a smarter, cleaner future.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <AuthModalProvider>
          <WalletProvider>
            <ClientErrorBoundary>
              <Navbar />
              <main className="flex-grow">
                <ClientLayout>
                  {children}
                </ClientLayout>
              </main>
              <Footer />
              <Toaster />
            </ClientErrorBoundary>
          </WalletProvider>
        </AuthModalProvider>
      </body>
    </html>
  );
}
