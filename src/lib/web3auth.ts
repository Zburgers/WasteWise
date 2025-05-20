import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { AuthAdapter } from "@web3auth/auth-adapter";
import {
  CHAIN_NAMESPACES,
  WEB3AUTH_NETWORK,
  WALLET_ADAPTERS,
} from "@web3auth/base";
import { getDefaultExternalAdapters } from "@web3auth/default-evm-adapter";

const clientId = "BEKUjqWyEVb2yxNIO47zaGuHZrWKetapKqRF07IIsoyf9GfJ1oMqDuxeK8TBOrFe-xrn5v0LABaLdq4sXCmJFd0";

let web3authInstance: Web3Auth | null = null;

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0xaa36a7", // Sepolia Testnet in hex
  rpcTarget: "https://rpc.sepolia.org",
  displayName: "Sepolia Testnet",
  blockExplorerUrl: "https://sepolia.etherscan.io",
  ticker: "ETH",
  tickerName: "Ethereum",
  nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
};

export const getWeb3AuthInstance = async (): Promise<Web3Auth> => {
  if (web3authInstance) return web3authInstance;

  // 1) Set up privateKeyProvider with chainConfig
  const privateKeyProvider = new EthereumPrivateKeyProvider({
    config: { chainConfig },
  });

  // Load environment variables for social login
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const APPLE_CLIENT_ID = process.env.NEXT_PUBLIC_APPLE_CLIENT_ID;

  // 2) Build Web3AuthOptions with enum-based network
  const web3AuthOptions: Web3AuthOptions = {
    clientId,
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
    chainConfig,
    privateKeyProvider,
    sessionTime: 86400, // 24 hours session
    enableLogging: true,
    uiConfig: {
      appName: "WasteWise",
      theme: { primary: "#768FFF" },
      mode: "light",
      logoLight: "/static/WasteWiselogo1.png",
      logoDark: "/static/WasteWiselogo1.png",
      defaultLanguage: "en",
    },
  };

  // 3) Instantiate Web3Auth
  web3authInstance = new Web3Auth(web3AuthOptions);

  // 4) Configure Social Login via AuthAdapter
  const authAdapter = new AuthAdapter({
    adapterSettings: {
      uxMode: "popup",
      // Simplified login config - only keep the most essential providers
      loginConfig: {
        google: { verifier: "google", typeOfLogin: "google", clientId: "" },
        apple:  { verifier: "apple",  typeOfLogin: "apple",  clientId: "" },
      },
      whiteLabel: {
        appName: "WasteWise",
        appUrl: "https://wastewise.app",
        logoLight: "/static/WasteWiselogo1.png", // Updated with WasteWise logo
        logoDark: "/static/WasteWiselogo1.png", // Updated with WasteWise logo
        defaultLanguage: "en",
        mode: "light",
      },
    },
    privateKeyProvider,
  });
  web3authInstance.configureAdapter(authAdapter);

  // 5) Auto-discover and configure all external EVM wallets (MetaMask, WalletConnect, etc.)
  const externalAdapters = await getDefaultExternalAdapters({ options: web3AuthOptions });
  externalAdapters.forEach((adapter) => {
    web3authInstance!.configureAdapter(adapter);
  });

  // 6) Initialize the modal with correct adapter keys
  await web3authInstance.initModal({
    modalConfig: {
      [WALLET_ADAPTERS.AUTH]: {
        label: "Social Login",
        showOnModal: true,
      },
      [WALLET_ADAPTERS.WALLET_CONNECT_V2]: {
        label: "WalletConnect",
        showOnModal: true,
      },
      [WALLET_ADAPTERS.COINBASE]: {
        label: "Coinbase Wallet",
        showOnModal: true,
      },
      [WALLET_ADAPTERS.TORUS_EVM]: {
        label: "Injected EVM Wallet",
        showOnModal: true,
      },
    },
  });

  return web3authInstance;
};

export const getCurrentWeb3AuthInstance = (): Web3Auth | null => web3authInstance;

export const resetWeb3AuthInstance = (): void => {
  web3authInstance = null;
};

export const checkUserLoggedIn = async (): Promise<boolean> => {
  if (!web3authInstance) return false;
  try {
    return web3authInstance.connected;
  } catch (e) {
    console.error("Error checking login status:", e);
    return false;
  }
};
