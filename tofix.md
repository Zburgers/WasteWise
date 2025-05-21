1. Metamask Wallet icon not coming 

## API Issues

Here is a summary of potential issues identified during the extensive API route and endpoint evaluation:

1.  **Leaderboard Implementation:** The `/api/leaderboard` endpoint currently returns dummy data. The real implementation using Prisma is commented out and needs to be fully implemented to display actual user rankings.
2.  **NFT Minting Logic:** The `/api/badges` POST endpoint includes a `TODO` for implementing the actual NFT minting logic. Currently, it only marks the badge as minted in the database. The full integration with an NFT minting process is missing.
3.  **Granular API Error Handling:** While some endpoints have specific error responses (e.g., `/api/profile-image`), the catch blocks in several API routes still return a generic 500 "Internal server error" for any unexpected issues. Adding more specific error logging and potentially more descriptive error messages in the response (while being careful not to expose sensitive details) could aid debugging.
4.  **Frontend Error Feedback:** Some frontend usages of the APIs, such as the user registration call in `src/app/profile/page.tsx`, could provide more explicit user feedback (e.g., a toast notification) if an API call fails, rather than just logging the error or relying on a broader catch block.
5.  **`itemsSorted` Calculation in `useUserStats` Hook:** The calculation of `itemsSorted` in `src/hooks/useUserStats.ts` assumes a fixed 5 points per sort event based on the total points. This calculation might be inaccurate if the point system changes or if points can be earned through other means. It would be more robust to fetch the actual `itemsSorted` count from the backend or centralize this calculation logic.
6.  **`profileImage` Type Error:** The linter error regarding the `profileImage` property on the `User` type in `src/app/dashboard/page.tsx` needs to be fixed by updating the local `User` interface definition to match the backend response. 