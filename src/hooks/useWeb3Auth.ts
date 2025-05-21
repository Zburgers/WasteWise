import { useState, useCallback, useEffect } from "react";
import { getWeb3AuthInstance, resetWeb3AuthInstance, getCurrentWeb3AuthInstance } from "../lib/web3auth";
import { BrowserProvider, formatEther } from "ethers";
import { IProvider } from "@web3auth/base";

interface User {
  address: string;
  email?: string;
  name?: string;
  profileImage?: string;
}

interface Web3AuthState {
  initialized: boolean;
  connected: boolean;
  user: User | null;
  loading: 'connecting' | 'disconnecting' | null;
  error: string | null;
}

export const useWeb3Auth = () => {
  const [state, setState] = useState<Web3AuthState>({
    initialized: false,
    connected: false,
    user: null,
    loading: null,
    error: null,
  });

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  const initialize = useCallback(async () => {
    try {
      // Import session management
      const { getCurrentSession, isAuthenticated } = await import('../lib/session');
      
      // First check if we have a session in storage
      const [sessionData, isAuth] = await Promise.all([
        getCurrentSession(),
        isAuthenticated()
      ]);
      
      if (sessionData && isAuth) {
        // We have a valid session, update the state
        setState(prev => ({
          ...prev,
          initialized: true,
          connected: true,
          user: {
            address: sessionData.address,
            email: sessionData.email,
            name: sessionData.name,
            profileImage: sessionData.profileImage,
          },
        }));
        return;
      }
      
      // No valid session, initialize and check Web3Auth
      const web3auth = await getWeb3AuthInstance();
      if (!web3auth) {
        setState(prev => ({ ...prev, initialized: true }));
        return;
      }

      const connected = web3auth.connected;
      if (!connected) {
        setState(prev => ({ ...prev, initialized: true }));
        return;
      }

      // Connected to Web3Auth, get provider and user info
      try {
        const provider = await web3auth.connect();
        if (provider) {
          const user = await getUserInfo(provider);
          setState(prev => ({
            ...prev,
            initialized: true,
            connected: true,
            user,
          }));
        }
      } catch (providerError) {
        console.error("Error connecting to provider:", providerError);
        setState(prev => ({ 
          ...prev, 
          initialized: true,
          error: "Failed to connect to provider" 
        }));
      }
    } catch (error) {
      console.error("Error initializing Web3Auth:", error);
      setState(prev => ({
        ...prev,
        initialized: true,
        error: "Failed to initialize wallet connection",
      }));
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const getUserInfo = async (provider: IProvider): Promise<User> => {
    const ethersProvider = new BrowserProvider(provider as any);
    const signer = await ethersProvider.getSigner();
    const address = await signer.getAddress();
    
    // Get user info from Web3Auth
    const web3auth = getCurrentWeb3AuthInstance();
    const userInfo = await web3auth?.getUserInfo();
    
    return {
      address,
      email: userInfo?.email,
      name: userInfo?.name,
      profileImage: userInfo?.profileImage,
    };
  };

  const login = useCallback(async () => {
    try {
      // Import auth-reset utilities and session utilities
      const { startLoginAttempt, clearLoginAttempt, checkAndResetStalledLogin } = await import('../lib/auth-reset');
      const { getCurrentSession, updateSessionData, checkUserExists, registerUser } = await import('../lib/session');
      
      // Check for and reset any stalled login attempts
      checkAndResetStalledLogin();
      
      // Start tracking this login attempt
      startLoginAttempt();
      
      setState(prev => ({ ...prev, loading: 'connecting', error: null }));
      const web3auth = await getWeb3AuthInstance();
      const provider = await web3auth.connect();
      
      // Clear the login tracking since we got a response (success or failure)
      clearLoginAttempt();
      
      if (provider) {
        // Get user info
        const user = await getUserInfo(provider);
        
        // Update session storage
        const ethersProvider = new BrowserProvider(provider as any);
        const balance = await ethersProvider.getBalance(user.address);
        const formattedBalance = formatEther(balance);
        
        // Check if user exists and register if needed
        const userExists = await checkUserExists(user.address);
        if (!userExists) {
          await registerUser(user.address, user.name, user.email);
        }
        
        // Update session with balance info
        await updateSessionData({
          balance: formattedBalance,
        });
        
        // Update state
        setState(prev => ({
          ...prev,
          connected: true,
          user,
          loading: null,
        }));
        
        return user;
      }
      throw new Error("Failed to connect provider");
    } catch (error) {
      console.error("Login error:", error);
      
      // Import and use the force reset on error
      const { forceResetAuth } = await import('../lib/auth-reset');
      
      // Only reset on specific errors that indicate a stuck state
      if (error instanceof Error && 
          (error.message.includes('User closed popup') || 
           error.message.includes('User closed modal'))) {
        // This is a normal user-initiated cancellation, don't reset
      } else {
        // This might be an error that could cause a stuck state, so reset
        forceResetAuth();
      }
      
      setState(prev => ({
        ...prev,
        loading: null,
        error: "Failed to connect wallet. Please try again.",
      }));
      throw error;
    }
  }, []);

  // This function can be removed or kept for backwards compatibility,
  // as the main Web3Auth modal now handles provider selection
  const loginWithProvider = useCallback(async (provider: string) => {
    // Just use the main login function as Web3Auth will handle provider selection in its modal
    return login();
  }, [login]);

  const logout = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: 'disconnecting', error: null }));
      
      // Clear session from storage
      const { clearSession } = await import('../lib/session');
      await clearSession();
      
      const web3auth = getCurrentWeb3AuthInstance();
      
      if (web3auth) {
        await web3auth.logout();
        
        // Import and use the complete auth reset to ensure full cleanup
        const { forceResetAuth } = await import('../lib/auth-reset');
        forceResetAuth();
      }
      
      setState(prev => ({
        ...prev,
        connected: false,
        user: null,
        loading: null,
      }));
    } catch (error) {
      console.error("Logout error:", error);
      
      // Even on error, we should try to reset the auth state
      resetWeb3AuthInstance();
      
      // Also clear session from storage
      try {
        const { clearSession } = await import('../lib/session');
        await clearSession();
      } catch (sessionError) {
        console.error("Error clearing session:", sessionError);
      }
      
      setState(prev => ({
        ...prev,
        loading: null,
        error: "Failed to disconnect wallet",
        // Force disconnection in the UI even if the actual logout failed
        connected: false,
        user: null,
      }));
      throw error;
    }
  }, []);

  const getUserBalance = useCallback(async (): Promise<string> => {
    try {
      let web3auth = getCurrentWeb3AuthInstance();
      if (!web3auth) {
        web3auth = await getWeb3AuthInstance();
      }
      if (!web3auth.connected) {
        throw new Error("Please connect your wallet first");
      }
      
      const provider = await web3auth.connect();
      if (provider) {
        const ethersProvider = new BrowserProvider(provider as any);
        const balance = await ethersProvider.getBalance(state.user?.address || "");
        return formatEther(balance);
      }
      throw new Error("Failed to get provider");
    } catch (error) {
      console.error("Error getting balance:", error);
      throw error;
    }
  }, [state.user?.address]);

  const signMessage = useCallback(async (message: string): Promise<string> => {
    try {
      let web3auth = getCurrentWeb3AuthInstance();
      if (!web3auth) {
        web3auth = await getWeb3AuthInstance();
      }
      
      if (!web3auth || !web3auth.connected) {
        throw new Error("Please connect your wallet first");
      }

      try {
        const provider = await web3auth.connect();
        if (provider) {
          const ethersProvider = new BrowserProvider(provider as any);
          const signer = await ethersProvider.getSigner();
          return await signer.signMessage(message);
        }
        throw new Error("Failed to get provider");
      } catch (error) {
        console.error("Error signing message:", error);
        throw error;
      }
    } catch (error) {
      console.error("Error signing message:", error);
      throw error;
    }
  }, []);

  const sendTransaction = useCallback(async (to: string, value: string): Promise<string> => {
    try {
      const web3auth = getCurrentWeb3AuthInstance();
      if (!web3auth) throw new Error("Web3Auth not initialized");
      
      const provider = await web3auth.connect();
      if (provider) {
        const ethersProvider = new BrowserProvider(provider as any);
        const signer = await ethersProvider.getSigner();
        
        const tx = await signer.sendTransaction({
          to,
          value: BigInt(value),
        });
        
        return tx.hash;
      }
      throw new Error("Failed to get provider");
    } catch (error) {
      console.error("Error sending transaction:", error);
      throw error;
    }
  }, []);

  return {
    ...state,
    login,            // The primary login function that handles all provider types
    loginWithProvider, // Kept for backwards compatibility
    logout,
    getUserBalance,
    signMessage,
    sendTransaction,
    clearError,
  };
};