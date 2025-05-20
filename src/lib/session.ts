import { getCurrentWeb3AuthInstance } from './web3auth';

/**
 * Session Management Utility
 * 
 * This utility provides industry-standard functions to handle user sessions in the WasteWise application.
 * It works with Web3Auth to retrieve and manage session data.
 */

// Session storage keys
const SESSION_STORAGE_KEY = 'wastewise_user_session';
const SESSION_TIMEOUT_KEY = 'wastewise_session_timeout';

// Session timeout (24 hours in milliseconds)
const SESSION_TIMEOUT = 24 * 60 * 60 * 1000;

export interface UserSession {
  address: string;
  email?: string;
  name?: string;
  isAuthenticated: boolean;
  lastAuthenticated: number; // timestamp
  balance?: string;
  profileImage?: string;
  chainId?: string;
  chainName?: string;
}

/**
 * Save user session to localStorage
 * @param session The user session to save
 */
const saveSessionToStorage = (session: UserSession): void => {
  try {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
    localStorage.setItem(SESSION_TIMEOUT_KEY, (Date.now() + SESSION_TIMEOUT).toString());
  } catch (error) {
    console.error('Error saving session to storage:', error);
  }
};

/**
 * Get user session from localStorage
 * @returns The user session from storage or null if not found
 */
const getSessionFromStorage = (): UserSession | null => {
  try {
    const sessionStr = localStorage.getItem(SESSION_STORAGE_KEY);
    const sessionTimeout = localStorage.getItem(SESSION_TIMEOUT_KEY);
    
    if (!sessionStr || !sessionTimeout) {
      return null;
    }
    
    // Check if session has expired
    if (Date.now() > parseInt(sessionTimeout, 10)) {
      clearSessionFromStorage();
      return null;
    }
    
    return JSON.parse(sessionStr);
  } catch (error) {
    console.error('Error getting session from storage:', error);
    return null;
  }
};

/**
 * Clear user session from localStorage
 */
const clearSessionFromStorage = (): void => {
  localStorage.removeItem(SESSION_STORAGE_KEY);
  localStorage.removeItem(SESSION_TIMEOUT_KEY);
};

/**
 * Get the current user session
 * First tries to get from localStorage, then from Web3Auth if needed
 * @returns The current user session or null if not authenticated
 */
export const getCurrentSession = async (): Promise<UserSession | null> => {
  // First check if we have a valid session in localStorage
  const storedSession = getSessionFromStorage();
  if (storedSession) {
    // Extend session timeout
    localStorage.setItem(SESSION_TIMEOUT_KEY, (Date.now() + SESSION_TIMEOUT).toString());
    return storedSession;
  }
  
  // If no stored session, try to get from Web3Auth
  const web3auth = getCurrentWeb3AuthInstance();
  
  if (!web3auth || !web3auth.connected) {
    return null;
  }

  try {
    // Get user info from Web3Auth
    const userInfo = await web3auth.getUserInfo();
    
    // Get the provider and user's address
    const provider = await web3auth.connect();
    if (!provider) return null;
    
    const accounts = await provider.request({ method: 'eth_accounts' }) as string[];
    const address = accounts[0];
    
    // Get chain information
    const chainId = await provider.request({ method: 'eth_chainId' }) as string;
    
    // Create session
    const session: UserSession = {
      address,
      email: userInfo?.email,
      name: userInfo?.name,
      profileImage: userInfo?.profileImage,
      isAuthenticated: true,
      lastAuthenticated: Date.now(),
      chainId,
      chainName: 'Sepolia Testnet', // Hardcoded for now, could be dynamically determined
    };
    
    // Save to localStorage
    saveSessionToStorage(session);
    
    return session;
  } catch (error) {
    console.error('Error getting current session:', error);
    return null;
  }
};

/**
 * Check if the user is authenticated
 * First checks localStorage, then Web3Auth if needed
 * @returns True if the user is authenticated, false otherwise
 */
export const isAuthenticated = async (): Promise<boolean> => {
  // First check localStorage
  const storedSession = getSessionFromStorage();
  if (storedSession) {
    return true;
  }
  
  // If not in localStorage, check Web3Auth
  const web3auth = getCurrentWeb3AuthInstance();
  return !!(web3auth && web3auth.connected);
};

/**
 * Clear the current session
 */
export const clearSession = async (): Promise<void> => {
  // Clear from localStorage
  clearSessionFromStorage();
  
  // Also logout from Web3Auth
  const web3auth = getCurrentWeb3AuthInstance();
  if (web3auth && web3auth.connected) {
    await web3auth.logout();
  }
};

/**
 * Update session with additional user data
 */
export const updateSessionData = async (data: Partial<UserSession>): Promise<UserSession | null> => {
  const currentSession = await getCurrentSession();
  
  if (!currentSession) {
    return null;
  }
  
  const updatedSession = {
    ...currentSession,
    ...data,
    lastAuthenticated: Date.now(), // Refresh timestamp
  };
  
  saveSessionToStorage(updatedSession);
  return updatedSession;
};
