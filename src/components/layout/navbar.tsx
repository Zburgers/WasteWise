"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Recycle, Menu, X, Home, LayoutDashboard, Sparkles, Users, User, LogOut } from 'lucide-react'; // Added User icon
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useAuthModal } from '@/hooks/useAuthModal';
import { useWallet } from '@/context/WalletContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getCurrentSession } from '@/lib/session';
import { UserSession } from '@/lib/session';

const navItems = [
  { href: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
  { href: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { href: '/challenges', label: 'Challenges', icon: <Users className="w-5 h-5" /> }, // New Challenges link
  // Add more nav items here if needed
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setShowAuthModal } = useAuthModal();
  const { user, connected, logout } = useWallet();
  const [session, setSession] = useState<UserSession | null>(null);
  
  // Get user session on load and when connection status changes
  useEffect(() => {
    const loadSession = async () => {
      if (connected) {
        const session = await getCurrentSession();
        setSession(session);
      } else {
        setSession(null);
      }
    };
    
    loadSession();
  }, [connected]);
  
  // Handle logout
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <Image 
            src="/static/WasteWiselogo1.png" 
            alt="WasteWise Logo" 
            width={56} 
            height={56} 
            className="h-14 w-auto object-contain" 
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
           <Link href="https://firebase.google.com/docs/genkit" target="_blank" rel="noopener noreferrer">
             <Button variant="outline" size="sm" className="group border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                Powered by Genkit <Sparkles className="ml-2 h-4 w-4 text-yellow-400 group-hover:text-yellow-300" />
             </Button>
            </Link>
          {/* Login Button or User Profile */}
          {connected && session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="ml-2 flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session.profileImage} />
                    <AvatarFallback className="text-xs">
                      {session.name ? session.name.substring(0, 2).toUpperCase() : session.address.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline-block">
                    {session.name || `${session.address.substring(0, 6)}...`}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <Link href="/profile">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="default"
              size="sm"
              className="ml-2"
              onClick={() => setShowAuthModal(true)}
            >
              Login
            </Button>
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="mb-8 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image 
                    src="/static/WasteWiselogo1.png" 
                    alt="WasteWise Logo" 
                    width={44} 
                    height={44} 
                    className="h-11 w-auto object-contain" 
                    priority
                  />
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close Menu</span>
                   </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                 <Link href="https://firebase.google.com/docs/genkit" target="_blank" rel="noopener noreferrer" className="mt-4">
                  <Button variant="outline" size="sm" className="w-full group border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                      Powered by Genkit <Sparkles className="ml-2 h-4 w-4 text-yellow-400 group-hover:text-yellow-300" />
                  </Button>
                </Link>
                {connected && session ? (
                  <>
                    <SheetClose asChild>
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors mt-4"
                      >
                        <User className="w-5 h-5" />
                        My Profile
                      </Link>
                    </SheetClose>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 w-full justify-start"
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <LogOut className="mr-2 h-5 w-5" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="default"
                    size="sm"
                    className="mt-4"
                    onClick={() => {
                      setShowAuthModal(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Login
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
