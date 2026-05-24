/*
  Warnings:

  - A unique constraint covering the columns `[profile_id]` on the table `elo_rating` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profile_id` to the `elo_rating` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "elo_rating" ADD COLUMN     "elo_overall_rating" INTEGER NOT NULL DEFAULT 1000,
ADD COLUMN     "profile_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "elo_rating_profile_id_key" ON "elo_rating"("profile_id");

-- AddForeignKey
ALTER TABLE "elo_rating" ADD CONSTRAINT "elo_rating_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
