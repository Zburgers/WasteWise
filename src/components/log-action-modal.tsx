
"use client";

import type { FC } from 'react';
import { useState } from 'react';
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { UserChallenge } from '@/lib/types';
import { Check, XIcon } from 'lucide-react';

interface LogActionModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  challenge: UserChallenge;
  onSave: (challengeId: string, progressIncrement: number) => void;
}

const LogActionModal: FC<LogActionModalProps> = ({ isOpen, setIsOpen, challenge, onSave }) => {
  const [progressInput, setProgressInput] = useState<string>("1"); // Default to logging 1 unit

  const handleSubmit = () => {
    const increment = parseInt(progressInput, 10);
    if (!isNaN(increment) && increment > 0) {
      onSave(challenge.id, increment);
      setIsOpen(false);
      setProgressInput("1"); // Reset for next time
    } else {
      // Basic validation feedback, could use toast
      alert("Please enter a valid positive number for your progress.");
    }
  };

  if (!challenge) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-card border-primary/50">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl">Log Progress: {challenge.title}</DialogTitle>
          <DialogDescription>
            Update your progress for this challenge. Current: {challenge.currentProgress}/{challenge.goal} {challenge.unit}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="progress" className="text-right text-foreground col-span-1">
              Add Progress:
            </Label>
            <Input
              id="progress"
              type="number"
              value={progressInput}
              onChange={(e) => setProgressInput(e.target.value)}
              className="col-span-3 bg-input text-foreground focus-visible:ring-primary"
              min="1"
              max={challenge.goal - challenge.currentProgress} // Prevent over-logging
            />
          </div>
           <p className="text-xs text-muted-foreground text-center col-span-4">
            How many {challenge.unit} have you completed for this action?
          </p>
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <DialogClose asChild>
            <Button variant="outline" className="hover:border-destructive hover:bg-destructive/10 hover:text-destructive">
              <XIcon className="mr-2 h-4 w-4" /> Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Check className="mr-2 h-4 w-4" /> Save Progress
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogActionModal;
