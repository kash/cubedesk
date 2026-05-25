/*
  Warnings:

  - You are about to drop the column `opponent_game_count` on the `elo_log` table. All the data in the column will be lost.
  - You are about to drop the column `player_game_count` on the `elo_log` table. All the data in the column will be lost.
  - Added the required column `opponent_new_elo_rating` to the `elo_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player_new_elo_rating` to the `elo_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player_new_game_count` to the `elo_log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "elo_log" DROP COLUMN "opponent_game_count",
DROP COLUMN "player_game_count",
ADD COLUMN     "opponent_new_elo_rating" INTEGER NOT NULL,
ADD COLUMN     "opponent_new_game_count" INTEGER,
ADD COLUMN     "player_new_elo_rating" INTEGER NOT NULL,
ADD COLUMN     "player_new_game_count" INTEGER NOT NULL;
