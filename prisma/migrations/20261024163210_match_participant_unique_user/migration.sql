/*
  Warnings:

  - A unique constraint covering the columns `[match_id,user_id]` on the table `match_participant` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "match_participant_match_id_idx";

-- CreateIndex
CREATE UNIQUE INDEX "match_participant_match_id_user_id_key" ON "match_participant"("match_id", "user_id");
