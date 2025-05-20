'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const mockBadges = [
  {
    id: '1',
    name: 'Eco Rookie',
    description: 'Sort your first item',
    imageUrl: '/static/ecorookiebadge.png',
    requiredPoints: 0, // Always unlocked
  },
  {
    id: '2',
    name: 'Recycling Warrior',
    description: 'Sort 50 items',
    imageUrl: '/static/recyclingwarrior.png',
    requiredPoints: 50, // Example required points
  },
  {
    id: '3',
    name: 'Eco Master',
    description: 'Sort 200 items',
    imageUrl: '/static/Ecomaster.png',
    requiredPoints: 200, // Example required points
  }
];

// Mock user points (can be adjusted to test different states)
const mockUserPoints = 150;

export default function BadgesPage() {
  const [userPoints] = useState(mockUserPoints);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Badges</h1>
      <div className="flex gap-4 mb-4">
        <Link href="/challenges" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Challenges
        </Link>
        <Link href="/leaderboard" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Leaderboard
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockBadges.map((badge) => {
          const isUnlocked = badge.id === '1' || userPoints >= badge.requiredPoints;

          return (
            <div key={badge.id} className="border p-4 rounded shadow flex flex-col">
              <img src={badge.imageUrl} alt={badge.name} className="w-full object-cover mb-2" />
              <h2 className="text-xl font-bold">{badge.name}</h2>
              <p>{badge.description}</p>
              {!isUnlocked && (
                <p className="text-sm text-yellow-500 mt-2">Requires {badge.requiredPoints} points</p>
              )}
              <Button
                className={`mt-4 ${!isUnlocked ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!isUnlocked}
                // TODO: Add click handler for mock dialog
              >
                Mint NFT
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
} 