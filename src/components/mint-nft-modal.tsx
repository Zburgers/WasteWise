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
import type { Badge, UserBadge } from '@/lib/types';
import { Check, XIcon, Award, Sparkles } from 'lucide-react';

interface MintNFTModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  badge: Badge;
  onMint: (badgeId: string) => void;
}

const MintNFTModal: FC<MintNFTModalProps> = ({ isOpen, setIsOpen, badge, onMint }) => {
  const handleMint = () => {
    onMint(badge.id);
    setIsOpen(false);
  };

  if (!badge) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-card border-primary/50">
        <DialogHeader className="text-center">
          <DialogTitle className="text-primary text-xl mb-2">Mint NFT Badge: {badge.name}</DialogTitle>
          <div className="mx-auto bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <Award className="h-12 w-12 text-primary" />
          </div>
          <DialogDescription className="text-center">
            Congratulations on earning the {badge.name} badge! You can now mint it as an NFT to showcase your environmental achievement on the blockchain.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="bg-[#0d1526] p-4 rounded-lg text-sm text-gray-300 border border-[#49597a]">
            <p className="font-medium text-[#22abf3] mb-2">Badge Details</p>
            <p><span className="font-semibold">Name:</span> {badge.name}</p>
            <p><span className="font-semibold">Description:</span> {badge.description}</p>
            <p><span className="font-semibold">Required Points:</span> {badge.requiredPoints}</p>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>Minting this NFT will connect to your wallet and create a permanent record of your achievement on the blockchain.</p>
          </div>
        </div>
        
        <DialogFooter className="gap-2 sm:gap-0">
          <DialogClose asChild>
            <Button variant="outline" className="hover:border-destructive hover:bg-destructive/10 hover:text-destructive">
              <XIcon className="mr-2 h-4 w-4" /> Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleMint} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Sparkles className="mr-2 h-4 w-4" /> Mint NFT
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MintNFTModal;
