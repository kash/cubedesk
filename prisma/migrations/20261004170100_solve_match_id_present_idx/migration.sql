-- CONCURRENTLY keeps solves writable while the index builds. It must be the only statement in its migration.
CREATE INDEX CONCURRENTLY "solve_match_id_present_idx" ON "solve"("match_id") WHERE (match_id IS NOT NULL);
