import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create initial badges
  const badges = await Promise.all([
    prisma.badge.create({
      data: {
        name: 'Eco Rookie',
        description: 'Sort your first item',
        requiredPoints: 0,
        imageUrl: '/badges/eco-rookie.png',
      },
    }),
    prisma.badge.create({
      data: {
        name: 'Recycling Warrior',
        description: 'Sort 50 items',
        requiredPoints: 250,
        imageUrl: '/badges/recycling-warrior.png',
      },
    }),
    prisma.badge.create({
      data: {
        name: 'Eco Master',
        description: 'Sort 200 items',
        requiredPoints: 1000,
        imageUrl: '/badges/eco-master.png',
      },
    }),
  ]);

  // Create initial challenges
  const challenges = await Promise.all([
    prisma.challenge.create({
      data: {
        title: 'Getting Started',
        description: 'Sort your first item',
        goal: 1,
        rewardPoints: 50,
      },
    }),
    prisma.challenge.create({
      data: {
        title: 'Weekly Recycling Champion',
        description: 'Sort 50 items this week',
        goal: 50,
        rewardPoints: 500,
      },
    }),
    prisma.challenge.create({
      data: {
        title: 'Monthly Master',
        description: 'Sort 200 items this month',
        goal: 200,
        rewardPoints: 2000,
      },
    }),
  ]);

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 