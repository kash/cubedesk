/*
  Warnings:

  - A unique constraint covering the columns `[game_session_id]` on the table `game_options` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "game_options_game_session_id_key" ON "game_options"("game_session_id");
