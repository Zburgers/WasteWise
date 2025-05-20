import { useWallet } from "../context/WalletContext";

const AuthButtons = () => {
  const { login, logout, user, loading } = useWallet();

  return (
    <div>
      {user ? (
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-300">
            {user.name || user.email ? 
              `Connected: ${user.name || user.email}` : 
              `Connected: ${user.address.substring(0, 6)}...${user.address.substring(38)}`
            }
          </p>
          <button
            onClick={logout}
            disabled={loading === 'disconnecting'}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition disabled:opacity-50"
          >
            {loading === 'disconnecting' ? 'Disconnecting...' : 'Logout'}
          </button>
        </div>
      ) : (
        <button
          onClick={login}
          disabled={loading === 'connecting'}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading === 'connecting' ? 'Connecting...' : 'Sign In'}
        </button>
      )}
    </div>
  );
};

export default AuthButtons; 