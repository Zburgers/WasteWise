# WasteWise API Documentation

## Authentication

All API endpoints (except public ones) require Web3Auth authentication. The authentication is handled via middleware that checks for a valid session and adds the user's wallet address to the request headers.

## Endpoints

### Sort Event

Records a waste sorting event and updates user points and challenges.

```http
POST /api/sort-event
```

**Request Body:**
```json
{
  "itemType": "plastic"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "sortEvent": {
      "id": "uuid",
      "userId": "uuid",
      "itemType": "plastic",
      "pointsEarned": 5,
      "createdAt": "2024-03-21T12:00:00Z"
    },
    "user": {
      "id": "uuid",
      "walletAddress": "0x...",
      "totalPoints": 100,
      "badgeLevel": 1
    },
    "challenges": [
      {
        "id": "uuid",
        "progress": 5,
        "isCompleted": false,
        "challenge": {
          "title": "Sort 10 items",
          "rewardPoints": 50
        }
      }
    ]
  }
}
```

### User Profile

Fetches user profile data including badges, active challenges, and recent sort events.

```http
GET /api/user-profile
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "walletAddress": "0x...",
      "totalPoints": 100,
      "badgeLevel": 1,
      "badges": [
        {
          "id": "uuid",
          "name": "Eco Rookie",
          "description": "Sort your first item",
          "imageUrl": "https://..."
        }
      ],
      "challenges": [
        {
          "id": "uuid",
          "progress": 5,
          "isCompleted": false,
          "challenge": {
            "title": "Sort 10 items",
            "description": "Sort 10 items in a day",
            "goal": 10,
            "rewardPoints": 50
          }
        }
      ],
      "sortEvents": [
        {
          "id": "uuid",
          "itemType": "plastic",
          "pointsEarned": 5,
          "createdAt": "2024-03-21T12:00:00Z"
        }
      ]
    }
  }
}
```

### User Points

Fetches user points and achievements.

```http
GET /api/user-points
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalPoints": 1250,
    "weeklyPoints": 150,
    "monthlyPoints": 450,
    "achievements": [
      {
        "id": "uuid",
        "title": "First Sort",
        "pointsAwarded": 50,
        "earnedAt": "2024-03-21T12:00:00Z"
      }
    ],
    "level": {
      "current": 2,
      "pointsToNextLevel": 250,
      "title": "Eco Warrior"
    }
  }
}
```

### User Challenges

Fetches all active and completed challenges for the user.

```http
GET /api/challenges
```

**Response:**
```json
{
  "success": true,
  "data": {
    "active": [
      {
        "id": "uuid",
        "title": "Weekly Recycling Champion",
        "description": "Sort 50 items this week",
        "progress": 25,
        "goal": 50,
        "reward": {
          "points": 500,
          "badge": "Weekly Champion"
        },
        "deadline": "2024-03-28T23:59:59Z"
      }
    ],
    "completed": [
      {
        "id": "uuid",
        "title": "Getting Started",
        "description": "Sort your first item",
        "completedAt": "2024-03-21T12:00:00Z",
        "reward": {
          "points": 50,
          "badge": "Beginner"
        }
      }
    ],
    "stats": {
      "totalCompleted": 8,
      "currentStreak": 3,
      "bestStreak": 5
    }
  }
}
```

### Leaderboard

Fetches the global leaderboard with pagination.

```http
GET /api/leaderboard?page=1&limit=10
```

**Response:**
```json
{
  "success": true,
  "data": {
    "users": [
      {
        "id": "uuid",
        "walletAddress": "0x1234...5678",
        "totalPoints": 1000,
        "badgeLevel": 2,
        "badges": [
          {
            "name": "Eco Master",
            "imageUrl": "https://..."
          }
        ]
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "pages": 10
    },
    "userRank": 5
  }
}
```

### Badges

Fetches all badges and their earned status for the current user.

```http
GET /api/badges
```

**Response:**
```json
{
  "success": true,
  "data": {
    "badges": [
      {
        "id": "uuid",
        "name": "Eco Rookie",
        "description": "Sort your first item",
        "requiredPoints": 0,
        "imageUrl": "https://...",
        "earned": true,
        "minted": false
      }
    ],
    "totalEarned": 1,
    "totalBadges": 10
  }
}
```

### Profile Image Upload

Upload or update a user's profile image.

```http
POST /api/profile-image
```

**Request Body:**
```json
{
  "image": "File (multipart/form-data)"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "imageUrl": "https://...",
    "message": "Profile image updated successfully"
  }
}
```

### Profile Image

Fetch a user's profile image.

```http
GET /api/profile-image
```

**Response:**
```json
{
  "success": true,
  "data": {
    "imageUrl": "https://...",
    "defaultImage": false
  }
}
```

### Mint Badge NFT

Mints a badge as an NFT (currently a placeholder for future implementation).

```http
POST /api/badges
```

**Request Body:**
```json
{
  "badgeId": "uuid"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "message": "Badge minted successfully",
    "badge": {
      "id": "uuid",
      "name": "Eco Rookie",
      "description": "Sort your first item",
      "requiredPoints": 0,
      "imageUrl": "https://...",
      "minted": true
    }
  }
}
```

## Error Responses

All endpoints return error responses in the following format:

```json
{
  "success": false,
  "error": "Error message"
}
```

Common HTTP status codes:
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error 