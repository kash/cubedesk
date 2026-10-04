-- CONCURRENTLY keeps solves writable while the index builds. It must be the only statement in its migration.
CREATE INDEX CONCURRENTLY "solve_match_participant_id_present_idx" ON "solve"("match_participant_id") WHERE (match_participant_id IS NOT NULL);
