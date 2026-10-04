-- CONCURRENTLY keeps solves writable while the index builds. It must be the only statement in its migration.
CREATE INDEX CONCURRENTLY "solve_smart_device_id_present_idx" ON "solve"("smart_device_id") WHERE (smart_device_id IS NOT NULL);
