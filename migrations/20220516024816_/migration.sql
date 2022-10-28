/*
  Warnings:

  - Added the required column `match_id` to the `elo_log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "elo_log" ADD COLUMN     "match_id" TEXT NOT NULL,
ALTER COLUMN "opponent_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "elo_log" ADD CONSTRAINT "elo_log_opponent_id_fkey" FOREIGN KEY ("opponent_id") REFERENCES "user_account"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;
