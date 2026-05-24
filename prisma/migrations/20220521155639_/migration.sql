/*
  Warnings:

  - Added the required column `client_id` to the `match_lobby` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "match_lobby" ADD COLUMN     "client_id" TEXT NOT NULL;
