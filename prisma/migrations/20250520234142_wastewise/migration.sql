-- AlterTable
ALTER TABLE "User" ADD COLUMN     "challengesCompleted" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "currentStreak" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "itemsSorted" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lastSortEventDate" TIMESTAMP(3),
ADD COLUMN     "name" TEXT,
ADD COLUMN     "onboarded" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "profileImage" TEXT;
