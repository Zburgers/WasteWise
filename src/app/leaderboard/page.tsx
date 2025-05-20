'use client';

import { useState } from 'react';
import { useLeaderboard } from '@/hooks/useLeaderboard';
import { LeaderboardUser } from '@/types/leaderboard';
import { BadgeDisplay } from '@/components/leaderboard/BadgeDisplay';

export default function LeaderboardPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useLeaderboard(page);

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Error loading leaderboard</div>;
  }

  if (!data?.success) {
    return <div className="flex justify-center items-center min-h-screen">Failed to load leaderboard</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Leaderboard</h1>
      
      {/* User's Rank */}
      {data.data.userRank && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="font-semibold">Your Rank: #{data.data.userRank}</h2>
        </div>
      )}

      {/* Leaderboard Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Badges</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.data.users.map((user: LeaderboardUser, index: number) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  #{((page - 1) * 10) + index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.walletAddress}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.totalPoints}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.badgeLevel}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <BadgeDisplay badges={user.badges} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center gap-2">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {page} of {data.data.pagination.pages}
        </span>
        <button
          onClick={() => setPage(p => Math.min(data.data.pagination.pages, p + 1))}
          disabled={page === data.data.pagination.pages}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
} 