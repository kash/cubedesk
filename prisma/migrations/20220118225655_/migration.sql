-- DropForeignKey
ALTER TABLE "solve" DROP CONSTRAINT "solve_game_session_id_fkey";

-- CreateIndex
CREATE INDEX "solve_game_session_id_idx" ON "solve"("game_session_id");

-- AddForeignKey
ALTER TABLE "solve" ADD CONSTRAINT "solve_game_session_id_fkey" FOREIGN KEY ("game_session_id") REFERENCES "game_session"("id") ON DELETE CASCADE ON UPDATE CASCADE;
