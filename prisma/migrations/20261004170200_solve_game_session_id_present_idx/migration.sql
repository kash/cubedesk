-- CONCURRENTLY keeps solves writable while the index builds. It must be the only statement in its migration.
CREATE INDEX CONCURRENTLY "solve_game_session_id_present_idx" ON "solve"("game_session_id") WHERE (game_session_id IS NOT NULL);
