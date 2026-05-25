/*
  Warnings:

  - You are about to drop the column `solves_hash` on the `user_account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_account" DROP COLUMN "solves_hash",
ADD COLUMN     "offline_hash" TEXT;
