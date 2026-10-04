-- CONCURRENTLY keeps solves writable while the index builds. It must be the only statement in its migration.
CREATE INDEX CONCURRENTLY "solve_created_at_brin_idx" ON "solve" USING BRIN ("created_at");
