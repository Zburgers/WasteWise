"use client";

import { useEffect } from "react";
import WalletConnection from "./WalletConnection";
import { useWallet } from "../context/WalletContext";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  onConnectionSuccess?: (user: any) => void;
  autoCloseOnConnection?: boolean;
}

export default function AuthModal({ 
  open, 
  onClose, 
  onConnectionSuccess,
  autoCloseOnConnection = true 
}: AuthModalProps) {
  const { connected, user, error } = useWallet();
  const { toast } = useToast();
  
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Show error toast if there's an error
  useEffect(() => {
    if (error) {
      toast({
        title: "Connection Error",
        description: error,
        variant: "destructive"
      });
    }
  }, [error, toast]);

  // Handle successful connection
  const handleConnectionSuccess = (user: any) => {
    console.log("User connected successfully:", user);
    
    // Call the parent callback if provided
    if (onConnectionSuccess) {
      onConnectionSuccess(user);
    }
    
    // Auto-close modal if enabled
    if (autoCloseOnConnection) {
      onClose();
    }

    // Show success toast
    toast({
      title: "Connected Successfully",
      description: "Your wallet has been connected.",
      className: "bg-green-600 border-green-700 text-white"
    });
  };

  // Handle disconnect
  const handleDisconnect = () => {
    console.log("User disconnected");
    toast({
      title: "Disconnected",
      description: "Your wallet has been disconnected.",
      variant: "default"
    });
  };

  // Auto-close modal if user is already connected
  useEffect(() => {
    if (connected && user && autoCloseOnConnection) {
      onClose();
    }
  }, [connected, user, autoCloseOnConnection, onClose]);

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Blurred, darkened background */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-lg transition-opacity duration-300 animate-fadeIn"
          onClick={onClose}
        />
        
        {/* Modal content */}
        <div className="relative bg-white dark:bg-zinc-900 rounded-xl shadow-xl z-10 animate-scaleIn w-full max-w-md">
          {/* Close button */}
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl transition-colors z-20"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
          
          {/* Wallet connection component */}
          <div className="p-0"> {/* Remove padding since WalletConnection has its own */}
            <WalletConnection 
              onConnectionSuccess={handleConnectionSuccess}
              onDisconnect={handleDisconnect}
            />
          </div>
        </div>
      </div>
      
      {/* CSS animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes scaleIn {
          from { 
            transform: scale(0.95) translateY(10px); 
            opacity: 0; 
          }
          to { 
            transform: scale(1) translateY(0px); 
            opacity: 1; 
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}