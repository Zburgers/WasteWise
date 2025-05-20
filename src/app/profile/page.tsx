"use client";

import { useEffect, useState, useCallback } from 'react';
import { useWallet } from '@/context/WalletContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage, AvatarUpload } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from '@/hooks/use-toast';
import { getCurrentSession } from '@/lib/session';
import { UserSession } from '@/lib/session';

export default function ProfilePage() {
  const { user, connected, logout, getUserBalance, signMessage } = useWallet();
  const { toast } = useToast();
  const [session, setSession] = useState<UserSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);
  const [signingMessage, setSigningMessage] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Load session data on mount
  useEffect(() => {
    loadSession();
  }, [connected, user, getUserBalance, toast]);

  const loadSession = async () => {
    try {
      setLoading(true);
      const sessionData = await getCurrentSession();
      setSession(sessionData);
      
      // Only attempt to get balance if we have both session and connection
      if (connected && user && sessionData?.isAuthenticated) {
        try {
          const balance = await getUserBalance();
          setBalance(balance);
        } catch (balanceError) {
          console.error("Error fetching balance:", balanceError);
          toast({
            title: "Balance Error",
            description: "Could not fetch wallet balance. Please try reconnecting your wallet.",
            variant: "destructive"
          });
        }
      }
    } catch (error) {
      console.error("Error loading profile data:", error);
      toast({
        title: "Error",
        description: "Failed to load profile data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignMessage = async () => {
    if (!session) return;
    try {
      setSigningMessage(true);
      const message = "Hello from WasteWise! Signing to verify wallet ownership.";
      const sig = await signMessage(message);
      setSignature(sig);
      toast({
        title: "Success",
        description: "Message signed successfully",
        className: "bg-green-600 border-green-700 text-white"
      });
    } catch (error) {
      console.error("Error signing message:", error);
      toast({
        title: "Error",
        description: "Failed to sign message",
        variant: "destructive"
      });
    } finally {
      setSigningMessage(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Success",
        description: "Logged out successfully",
      });
    } catch (error) {
      console.error("Error logging out:", error);
      toast({
        title: "Error",
        description: "Failed to log out",
        variant: "destructive"
      });
    }
  };

  // Format wallet address for display
  const formatAddress = (address: string) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };
  
  // Generate initials from name or address
  const getInitials = () => {
    if (session?.name) {
      const nameParts = session.name.split(' ');
      if (nameParts.length >= 2) {
        return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
      }
      return session.name.substring(0, 2).toUpperCase();
    }
    if (session?.address) {
      return session.address.substring(2, 4).toUpperCase();
    }
    return 'WW';
  };

  const handleImageUpload = useCallback(async (file: File) => {
    try {
      setUploading(true);

      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid File",
          description: "Please upload an image file",
          variant: "destructive"
        });
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Image must be less than 5MB",
          variant: "destructive"
        });
        return;
      }

      // Create FormData and append the file
      const formData = new FormData();
      formData.append('image', file);

      // Make API call to update profile image
      const response = await fetch('/api/profile-image', {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${session?.address || ''}`
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update profile image');
      }

      if (!data.success) {
        throw new Error(data.error || 'Failed to update profile image');
      }

      // Reload session data to get updated profile image
      await loadSession();

      toast({
        title: "Success",
        description: "Profile picture updated successfully",
      });
    } catch (error) {
      console.error('Error updating profile image:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to update profile picture",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  }, [toast, loadSession, session?.address]);

  if (loading) {
    return (
      <div className="container max-w-2xl mx-auto py-12">
        <div className="flex items-center justify-center p-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (!connected || !session) {
    return (
      <div className="container max-w-2xl mx-auto py-12">
        <Card className="shadow-md">
          <CardHeader className="text-center">
            <CardTitle>Not Connected</CardTitle>
            <CardDescription>
              Please connect your wallet to view your profile
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl mx-auto py-12">
      <Card className="shadow-md">
        <CardHeader className="pb-0">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">User Profile</CardTitle>
              <CardDescription>Manage your account details and wallet information</CardDescription>
            </div>
            <Button variant="outline" onClick={handleLogout}>Logout</Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center md:flex-row md:items-start gap-6 mb-6">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src={session.profileImage} alt={session.name || "User"} />
                <AvatarFallback className="text-lg bg-blue-100 text-blue-800">{getInitials()}</AvatarFallback>
                {!uploading && <AvatarUpload onUpload={handleImageUpload} className="text-white" />}
              </Avatar>
              {uploading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                </div>
              )}
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Name</h3>
                <p className="text-lg font-semibold">{session.name || "Not provided"}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p className="text-lg font-semibold">{session.email || "Not provided"}</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="grid gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">Wallet Address</h3>
              <div className="flex items-center">
                <span className="font-mono text-xs sm:text-sm bg-white dark:bg-gray-800 p-2 rounded border border-blue-100 dark:border-blue-800 flex-1 overflow-auto">
                  {session.address}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="ml-2"
                  onClick={() => {
                    navigator.clipboard.writeText(session.address);
                    toast({
                      title: "Address Copied",
                      description: "Wallet address copied to clipboard",
                    });
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md">
                <h3 className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">Balance</h3>
                <p className="text-xl font-semibold">
                  {balance ? `${parseFloat(balance).toFixed(4)} ETH` : "Loading..."}
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-md">
                <h3 className="text-sm font-medium text-purple-700 dark:text-purple-300 mb-1">Network</h3>
                <p className="text-xl font-semibold">{session.chainName || "Sepolia Testnet"}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Button 
              onClick={handleSignMessage}
              disabled={signingMessage}
              className="w-full"
            >
              {signingMessage ? "Signing..." : "Sign Message"}
            </Button>
            
            {signature && (
              <div className="mt-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Signature</h3>
                <p className="font-mono text-xs break-all">{signature}</p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          <p>Last authenticated: {new Date(session.lastAuthenticated).toLocaleString()}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
