"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Recycle, Menu, X, Home, LayoutDashboard, Sparkles, Users } from 'lucide-react'; // Added Users icon
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navItems = [
  { href: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
  { href: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { href: '/challenges', label: 'Challenges', icon: <Users className="w-5 h-5" /> }, // New Challenges link
  // Add more nav items here if needed
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
