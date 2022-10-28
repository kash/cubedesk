/*
  Warnings:

  - A unique constraint covering the columns `[match_session_id]` on the table `game_options` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "elo_rating" ADD COLUMN     "games_222_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "games_333_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "games_444_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "games_overall_count" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "elo_222_rating" DROP DEFAULT,
ALTER COLUMN "elo_333_rating" DROP DEFAULT,
ALTER COLUMN "elo_444_rating" DROP DEFAULT,
ALTER COLUMN "elo_overall_rating" DROP DEFAULT;

-- AlterTable
ALTER TABLE "match_session" ADD COLUMN     "rated" BOOLEAN DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "game_options_match_session_id_key" ON "game_options"("match_session_id");
