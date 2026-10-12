-- CONCURRENTLY keeps solves writable while the index builds. It must be the only statement in its migration.
CREATE INDEX CONCURRENTLY "solve_created_at_idx" ON "solve"("created_at");
