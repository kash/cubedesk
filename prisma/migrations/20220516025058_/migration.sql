/*
  Warnings:

  - You are about to drop the column `user_id` on the `elo_log` table. All the data in the column will be lost.
  - Added the required column `player_game_count` to the `elo_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player_id` to the `elo_log` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "elo_log" DROP CONSTRAINT "elo_log_user_id_fkey";

-- DropIndex
DROP INDEX "elo_log_user_id_idx";

-- AlterTable
ALTER TABLE "elo_log" DROP COLUMN "user_id",
ADD COLUMN     "opponent_game_count" INTEGER,
ADD COLUMN     "player_game_count" INTEGER NOT NULL,
ADD COLUMN     "player_id" TEXT NOT NULL,
ALTER COLUMN "match_id" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "elo_log_player_id_idx" ON "elo_log"("player_id");

-- AddForeignKey
ALTER TABLE "elo_log" ADD CONSTRAINT "elo_log_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elo_log" ADD CONSTRAINT "elo_log_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "match"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;
