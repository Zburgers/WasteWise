import { Client } from 'pg';

const client = new Client({
  connectionString: 'postgresql://naki:naki@localhost:5432/wastewise?schema=public',
});

async function main() {
  await client.connect();

  // Insert badges
  await client.query(`
    INSERT INTO "Badge" (name, description, "requiredPoints", "imageUrl")
    VALUES
      ('Eco Rookie', 'Sort your first item', 0, '/badges/eco-rookie.png'),
      ('Recycling Warrior', 'Sort 50 items', 250, '/badges/recycling-warrior.png'),
      ('Eco Master', 'Sort 200 items', 1000, '/badges/eco-master.png')
    ON CONFLICT (name) DO NOTHING;
  `);

  // Insert challenges
  await client.query(`
    INSERT INTO "Challenge" (title, description, goal, "rewardPoints")
    VALUES
      ('Getting Started', 'Sort your first item', 1, 50),
      ('Weekly Recycling Champion', 'Sort 50 items this week', 50, 500),
      ('Monthly Master', 'Sort 200 items this month', 200, 2000)
    ON CONFLICT (title) DO NOTHING;
  `);

  // Insert dummy leaderboard data
  await client.query(`
    INSERT INTO "User" (id, "walletAddress", "totalPoints", "badgeLevel")
    VALUES
      ('1', '0x1234...5678', 1000, 2),
      ('2', '0x8765...4321', 800, 1),
      ('3', '0xabcd...efgh', 600, 1)
    ON CONFLICT (id) DO NOTHING;
  `);

  console.log('Dummy data inserted successfully!');
  await client.end();
}

main().catch(e => {
  console.error('Error running simple seed:', e);
  process.exit(1);
}); 