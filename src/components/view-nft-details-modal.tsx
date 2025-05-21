"use client";

import type { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { UserBadge } from '@/lib/types';
import { ExternalLink, Copy, Check, XIcon, Award, Clock, Sparkles, FileCode, Wallet, Link2 } from 'lucide-react';
import { useState } from "react";

interface ViewNFTDetailsModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  userBadge: UserBadge;
}

const ViewNFTDetailsModal: FC<ViewNFTDetailsModalProps> = ({ isOpen, setIsOpen, userBadge }) => {
  const [hasCopied, setHasCopied] = useState(false);
  
  // Generate fake blockchain and NFT details (in a real app these would come from a blockchain API)
  const blockchainDetails = {
    transactionId: `0x${Math.random().toString(36).substr(2, 8)}${Math.random().toString(36).substr(2, 8)}`,
    contractAddress: `0x${Math.random().toString(36).substr(2, 8)}${Math.random().toString(36).substr(2, 8)}`,
    walletAddress: `0x${Math.random().toString(36).substr(2, 8)}${Math.random().toString(36).substr(2, 8)}`,
    tokenId: userBadge.nftId || `${Math.floor(Math.random() * 1000)}`,
    network: "Ethereum Testnet",
    gasUsed: `${Math.floor(Math.random() * 50000 + 20000)}`,
    blockNumber: `${Math.floor(Math.random() * 9000000 + 1000000)}`,
    timestamp: userBadge.nftMintDate?.toISOString() || new Date().toISOString()
  };

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const openExplorer = () => {
    window.open(`https://etherscan.io/tx/${blockchainDetails.transactionId}`, '_blank');
  };

  if (!userBadge) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] bg-card border-primary/50 overflow-y-auto max-h-[90vh]">
        <DialogHeader className="text-center">
          <DialogTitle className="text-primary text-xl mb-2">NFT Badge: {userBadge.name}</DialogTitle>
          <div className="relative mx-auto my-6 w-48 h-48 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-xl flex items-center justify-center p-2 border border-green-400/30">
            <img 
              src={userBadge.imageUrl} 
              alt={userBadge.name} 
              className="w-full h-full object-contain rounded-lg shadow-lg" 
            />
            <div className="absolute -bottom-3 -right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
              Verified
            </div>
          </div>
          <DialogDescription className="text-center mt-4">
            This badge has been minted as an NFT on the blockchain, creating a permanent record of your environmental achievement.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="bg-[#0d1526] p-4 rounded-lg text-sm text-gray-300 border border-[#49597a]">
            <p className="font-medium text-[#22abf3] mb-2 flex items-center">
              <FileCode className="w-4 h-4 mr-2" /> Blockchain Details
            </p>
            
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 mb-1 text-xs">Transaction ID</p>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-white truncate">{blockchainDetails.transactionId}</p>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6" 
                    onClick={() => handleCopyToClipboard(blockchainDetails.transactionId)}
                  >
                    {hasCopied ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 mb-1 text-xs">Smart Contract</p>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-white truncate">{blockchainDetails.contractAddress}</p>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6" 
                    onClick={() => handleCopyToClipboard(blockchainDetails.contractAddress)}
                  >
                    {hasCopied ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 mb-1 text-xs">Wallet Address</p>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-white truncate">{blockchainDetails.walletAddress}</p>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6" 
                    onClick={() => handleCopyToClipboard(blockchainDetails.walletAddress)}
                  >
                    {hasCopied ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-gray-400 mb-1 text-xs">Token ID</p>
                  <p className="font-mono text-xs text-white">{blockchainDetails.tokenId}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1 text-xs">Network</p>
                  <p className="font-mono text-xs text-white">{blockchainDetails.network}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1 text-xs">Gas Used</p>
                  <p className="font-mono text-xs text-white">{blockchainDetails.gasUsed}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1 text-xs">Block Number</p>
                  <p className="font-mono text-xs text-white">{blockchainDetails.blockNumber}</p>
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 mb-1 text-xs">Timestamp</p>
                <p className="font-mono text-xs text-white">
                  {new Date(blockchainDetails.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0d1526] p-4 rounded-lg text-sm text-gray-300 border border-[#49597a]">
            <p className="font-medium text-[#22abf3] mb-2 flex items-center">
              <Award className="w-4 h-4 mr-2" /> Badge Details
            </p>
            <p><span className="font-semibold">Name:</span> {userBadge.name}</p>
            <p><span className="font-semibold">Description:</span> {userBadge.description}</p>
            <p><span className="font-semibold">Required Points:</span> {userBadge.requiredPoints}</p>
            <p><span className="font-semibold">Category:</span> {userBadge.category}</p>
            {userBadge.dateUnlocked && (
              <p><span className="font-semibold">Date Unlocked:</span> {new Date(userBadge.dateUnlocked).toLocaleDateString()}</p>
            )}
            {userBadge.nftMintDate && (
              <p><span className="font-semibold">Date Minted:</span> {new Date(userBadge.nftMintDate).toLocaleDateString()}</p>
            )}
          </div>
        </div>
        
        <DialogFooter className="gap-2 sm:gap-0">
          <DialogClose asChild>
            <Button variant="outline" className="hover:border-primary hover:bg-primary/10 hover:text-primary">
              <XIcon className="mr-2 h-4 w-4" /> Close
            </Button>
          </DialogClose>
          <Button 
            onClick={openExplorer} 
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <ExternalLink className="mr-2 h-4 w-4" /> View on Explorer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewNFTDetailsModal;
