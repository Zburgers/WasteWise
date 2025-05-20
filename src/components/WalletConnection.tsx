import React from 'react';
import { useWallet } from '../context/WalletContext';
import { useToast } from '@/hooks/use-toast';

interface WalletConnectionProps {
  onConnectionSuccess?: (user: any) => void;
  onDisconnect?: () => void;
}

const WalletConnection: React.FC<WalletConnectionProps> = ({
  onConnectionSuccess,
  onDisconnect
}) => {
  const {
    login,
    logout,
    user,
    loading,
    error,
    initialized,
    connected,
    getUserBalance,
    signMessage,
    clearError
  } = useWallet();

  const { toast } = useToast();
  const [balance, setBalance] = React.useState<string | null>(null);
  const [signature, setSignature] = React.useState<string | null>(null);

  // Get balance when user connects
  React.useEffect(() => {
    if (connected && user) {
      getUserBalance().then(setBalance).catch(err => {
        console.error("Error getting balance:", err);
        toast({
          title: "Error",
          description: "Failed to fetch wallet balance",
          variant: "destructive"
        });
      });
    }
  }, [connected, user, getUserBalance, toast]);

  const handleSignMessage = async () => {
    try {
      const message = "Hello Web3Auth!";
      const sig = await signMessage(message);
      setSignature(sig);
      toast({
        title: "Message Signed",
        description: "Your message has been signed successfully.",
        className: "bg-green-600 border-green-700 text-white"
      });
    } catch (err) {
      console.error("Error signing message:", err);
      toast({
        title: "Error",
        description: "Failed to sign message",
        variant: "destructive"
      });
    }
  };

  const handleLogin = async () => {
    try {
      const user = await login();
      onConnectionSuccess?.(user);
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Connection Error",
        description: "Failed to connect wallet",
        variant: "destructive"
      });
    }
  };


  const handleLogout = async () => {
    try {
      await logout();
      onDisconnect?.();
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Error",
        description: "Failed to disconnect wallet",
        variant: "destructive"
      });
    }
  };

  if (!initialized) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Initializing Web3Auth...</p>
        </div>
      </div>
    );
  }

  if (error) {
    // Dynamically import the ResetAuthButton to avoid circular dependencies
    const ResetAuthButton = React.lazy(() => import('./ResetAuthButton'));
    
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-red-800 font-medium">Connection Error</h3>
            <p className="text-red-600 text-sm mt-1">{error}</p>
          </div>
          <button
            onClick={clearError}
            className="text-red-400 hover:text-red-600"
          >
            ×
          </button>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">If you're having trouble connecting, try resetting your login:</p>
          <React.Suspense fallback={<button className="px-3 py-1 text-sm bg-gray-200 rounded-md">Loading...</button>}>
            <ResetAuthButton className="px-3 py-1 text-sm" />
          </React.Suspense>
        </div>
      </div>
    );
  }

  if (connected && user) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Wallet Connected</h2>
          <button
            onClick={handleLogout}
            disabled={loading === 'disconnecting'}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
          >
            {loading === 'disconnecting' ? 'Disconnecting...' : 'Disconnect'}
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-4">
            <h3 className="font-medium text-blue-700">User Session Data:</h3>
            <div className="mt-2 text-xs font-mono bg-white p-2 rounded border border-blue-100 max-h-40 overflow-auto">
              {JSON.stringify(user, null, 2)}
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-600">Address:</label>
            <p className="text-gray-800 font-mono text-sm break-all">{user.address}</p>
          </div>
          
          {user.email && (
            <div>
              <label className="text-sm font-medium text-gray-600">Email:</label>
              <p className="text-gray-800">{user.email}</p>
            </div>
          )}
          
          {user.name && (
            <div>
              <label className="text-sm font-medium text-gray-600">Name:</label>
              <p className="text-gray-800">{user.name}</p>
            </div>
          )}
          
          {balance && (
            <div>
              <label className="text-sm font-medium text-gray-600">Balance:</label>
              <p className="text-gray-800">{parseFloat(balance).toFixed(4)} ETH</p>
            </div>
          )}
        </div>
        
        <div className="mt-6 space-y-3">
          <button
            onClick={handleSignMessage}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Sign Message
          </button>
          
          {signature && (
            <div>
              <label className="text-sm font-medium text-gray-600">Signature:</label>
              <p className="text-gray-800 font-mono text-xs break-all bg-gray-50 p-2 rounded">
                {signature}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Connect to WasteWise</h2>
      
      <div className="space-y-4">
        <button
          onClick={handleLogin}
          disabled={loading !== null}
          className="w-full flex items-center justify-center px-4 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          ) : (
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 7h-3V5a4 4 0 0 0-8 0v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor"/>
            </svg>
          )}
          Sign In / Connect Wallet
        </button>
        
        <div className="mt-4 text-xs text-gray-500 text-center">
          By connecting, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default WalletConnection; 