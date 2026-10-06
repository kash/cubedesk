-- Phase 2 of renaming cube_type to event_type. Only deploy this once phase 1 (add_event_type) is live everywhere: the
-- servers running then never read or write cube_type or the custom_cube_type view.
DROP TRIGGER "solve_sync_event_type" ON "solve";
DROP TRIGGER "demo_solve_sync_event_type" ON "demo_solve";
DROP TRIGGER "setting_sync_event_type" ON "setting";
DROP TRIGGER "game_options_sync_event_type" ON "game_options";
DROP TRIGGER "elo_log_sync_event_type" ON "elo_log";
DROP TRIGGER "match_lobby_sync_event_type" ON "match_lobby";
DROP TRIGGER "top_solve_sync_event_type" ON "top_solve";
DROP TRIGGER "top_average_sync_event_type" ON "top_average";
DROP TRIGGER "custom_trainer_sync_event_type" ON "custom_trainer";
DROP TRIGGER "trainer_algorithm_sync_event_type" ON "trainer_algorithm";
DROP FUNCTION "sync_event_type_with_cube_type"();

-- Dropping a column only changes the catalog. The space is reclaimed as rows are rewritten.
ALTER TABLE "solve" DROP COLUMN "cube_type";
ALTER TABLE "demo_solve" DROP COLUMN "cube_type";
ALTER TABLE "setting" DROP COLUMN "cube_type";
ALTER TABLE "game_options" DROP COLUMN "cube_type";
ALTER TABLE "elo_log" DROP COLUMN "cube_type";
ALTER TABLE "match_lobby" DROP COLUMN "cube_type";
ALTER TABLE "top_solve" DROP COLUMN "cube_type";
ALTER TABLE "top_average" DROP COLUMN "cube_type";
ALTER TABLE "custom_trainer" DROP COLUMN "cube_type";
ALTER TABLE "trainer_algorithm" DROP COLUMN "cube_type";

DROP VIEW "custom_cube_type";
