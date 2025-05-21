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
import { useUserStats } from '@/hooks/useUserStats';

export default function ProfilePage() {
  const { user, connected, logout, getUserBalance, signMessage } = useWallet();
  const { toast } = useToast();
  const [session, setSession] = useState<UserSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);
  const [signingMessage, setSigningMessage] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const { stats, isLoading: statsLoading } = useUserStats();
  const [showOnboarding, setShowOnboarding] = useState(false);
  
  // Load session data on mount
  useEffect(() => {
    loadSession();
  }, [connected, user, getUserBalance, toast]);

  useEffect(() => {
    if (session) {
      setEditedName(session.name || "");
      setEditedEmail(session.email || "");
    }
  }, [session]);

  const loadSession = async () => {
    try {
      setLoading(true);
      const sessionData = await getCurrentSession();
      setSession(sessionData);
      
      // Check if the user has completed onboarding
      if (sessionData?.isAuthenticated) {
        try {
          const userProfileResponse = await fetch('/api/user-profile', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionData.address}`
            }
          });
          
          if (userProfileResponse.ok) {
            const profileData = await userProfileResponse.json();
            if (profileData.success && profileData.user) {
              // Show onboarding if the user hasn't been onboarded
              setShowOnboarding(!profileData.user.onboarded && (!profileData.user.name || !profileData.user.email));
            }
          } else {
            // If there's an error with fetching the profile, we might need to register the user
            const userExistsResponse = await fetch('/api/user-exists', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ walletAddress: sessionData.address }),
            });
            
            const userExistsData = await userExistsResponse.json();
            
            if (!userExistsData.exists) {
              // User doesn't exist in the database, register them
              const registerResponse = await fetch('/api/user-register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  walletAddress: sessionData.address,
                  name: sessionData.name,
                  email: sessionData.email
                }),
              });
              
              if (registerResponse.ok) {
                // After successful registration, show onboarding
                setShowOnboarding(true);
              } else {
                 // Show error toast if registration failed
                 const errorData = await registerResponse.json();
                 toast({
                   title: "Registration Error",
                   description: errorData.error || "Failed to register user.",
                   variant: "destructive",
                 });
              }
            }
          }
        } catch (profileError) {
          console.error("Error fetching user profile:", profileError);
          // Show error toast for profile fetch errors
          toast({
            title: "Profile Error",
            description: "Failed to load user profile data.",
            variant: "destructive",
          });
        }
      }
      
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
      // Generic error toast for overall load failure
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

  const handleUpdateProfile = async () => {
    if (!session) return;
    try {
      const response = await fetch('/api/user-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.address}`,
        },
        body: JSON.stringify({
          name: editedName,
          email: editedEmail,
          onboarded: true, // Mark user as onboarded when they update their profile
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Show error toast if update failed
        toast({
          title: "Profile Update Error",
          description: data.error || 'Failed to update profile',
          variant: "destructive"
        });
        throw new Error(data.error || 'Failed to update profile');
      }

      // Hide onboarding after successful profile update
      setShowOnboarding(false);
      
      await loadSession();
      setIsEditing(false);
      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      // Show generic error toast for update process failure
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to update profile",
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
        // Show error toast if upload failed
        toast({
          title: "Image Upload Error",
          description: data.error || 'Failed to update profile image',
          variant: "destructive"
        });
        throw new Error(data.error || 'Failed to update profile image');
      }

      if (!data.success) {
         // Show error toast if API returned success: false
         toast({
           title: "Image Upload Error",
           description: data.error || 'Failed to update profile image',
           variant: "destructive"
         });
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
      // Show generic error toast for image upload process failure
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
      {showOnboarding ? (
        <Card className="shadow-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome to WasteWise!</CardTitle>
            <CardDescription>
              Please complete your profile to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Name</h3>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Email</h3>
                <input
                  type="email"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex justify-end">
                <Button onClick={handleUpdateProfile}>Save Profile</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
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
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-gray-500">Name</h3>
                    {!isEditing && (
                      <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
                        Edit
                      </Button>
                    )}
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your name"
                    />
                  ) : (
                    <p className="text-lg font-semibold">{session.name || "Not provided"}</p>
                  )}
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Email</h3>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedEmail}
                      onChange={(e) => setEditedEmail(e.target.value)}
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your email"
                    />
                  ) : (
                    <p className="text-lg font-semibold">{session.email || "Not provided"}</p>
                  )}
                </div>

                {isEditing && (
                  <div className="flex gap-2 justify-end">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                    <Button onClick={handleUpdateProfile}>Save Changes</Button>
                  </div>
                )}
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="grid gap-6">
              {/* Achievements & Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Total Points</span>
                        <span className="font-semibold">{stats.points}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Items Sorted</span>
                        <span className="font-semibold">{stats.itemsSorted}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Challenges Completed</span>
                        <span className="font-semibold">{stats.challengesCompleted}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Wallet Section */}
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Wallet Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <span className="text-gray-600 dark:text-gray-400 block mb-1">Address</span>
                        <div className="flex items-center gap-2">
                          <code className="text-sm bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded">
                            {formatAddress(session.address)}
                          </code>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => {
                              navigator.clipboard.writeText(session.address);
                              toast({
                                title: "Copied",
                                description: "Address copied to clipboard",
                              });
                            }}
                          >
                            Copy
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-gray-600 dark:text-gray-400">Balance</span>
                        <span className="font-semibold">{balance ? `${parseFloat(balance).toFixed(4)} ETH` : "Loading..."}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Network</span>
                        <span className="font-semibold">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            {session.chainName || "Sepolia Testnet"}
                          </div>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Message Signing Section */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                <h3 className="font-medium mb-2">Verify Wallet Ownership</h3>
                <div className="space-y-4">
                  <Button 
                    onClick={handleSignMessage}
                    disabled={signingMessage}
                    className="w-full"
                  >
                    {signingMessage ? "Signing..." : "Sign Message"}
                  </Button>
                  
                  {signature && (
                    <div className="mt-4 bg-white/50 dark:bg-gray-900/50 p-4 rounded-md">
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Signature</h3>
                      <p className="font-mono text-xs break-all">{signature}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              Last authenticated: {new Date(session.lastAuthenticated).toLocaleString()}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}


