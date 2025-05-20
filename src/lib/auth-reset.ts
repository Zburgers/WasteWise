/**
 * This utility provides functions to handle auth reset in case of stuck logins
 */

import { resetWeb3AuthInstance } from './web3auth';

// localStorage key for tracking login attempts
const LOGIN_ATTEMPT_KEY = 'wastewise_login_attempt';
const MAX_LOGIN_TIME = 30000; // 30 seconds

/**
 * Start tracking a login attempt
 */
export const startLoginAttempt = (): void => {
  localStorage.setItem(LOGIN_ATTEMPT_KEY, Date.now().toString());
};

/**
 * Clear the login attempt tracking
 */
export const clearLoginAttempt = (): void => {
  localStorage.removeItem(LOGIN_ATTEMPT_KEY);
};

/**
 * Check if there's a stalled login attempt and reset if needed
 * @returns True if a reset was needed and performed
 */
export const checkAndResetStalledLogin = (): boolean => {
  const loginAttemptTime = localStorage.getItem(LOGIN_ATTEMPT_KEY);
  
  if (loginAttemptTime) {
    const startTime = parseInt(loginAttemptTime, 10);
    const currentTime = Date.now();
    
    // If the login has been in progress for too long, reset it
    if (currentTime - startTime > MAX_LOGIN_TIME) {
      console.log('Detected stalled login attempt, resetting Web3Auth...');
      resetWeb3AuthInstance();
      clearLoginAttempt();
      return true;
    }
  }
  
  return false;
};

/**
 * Force reset the Web3Auth instance and clear any login attempts
 */
export const forceResetAuth = (): void => {
  resetWeb3AuthInstance();
  clearLoginAttempt();
  // Clear any web3auth related localStorage items
  Object.keys(localStorage).forEach(key => {
    if (key.includes('web3auth') || key.includes('openlogin')) {
      localStorage.removeItem(key);
    }
  });
};
