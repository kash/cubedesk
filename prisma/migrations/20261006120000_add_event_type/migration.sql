-- Phase 1 of renaming cube_type to event_type. Servers from the previous deploy keep running against this schema
-- until ECS replaces them, and they only know about cube_type, so both columns are kept in sync by a trigger until
-- cube_type is dropped in phase 2. The new code never reads or writes cube_type (it is @ignore'd in the schema).
--
-- cube_type loses its NOT NULL and default so inserts from new code, which leave it out, can be told apart from
-- inserts from old code, which always set it. The trigger fills it in either way.
--
-- Every statement here only changes the catalog, so the locks they take are brief. Existing rows are copied over by
-- the next migration, in batches, before any new code is deployed.

CREATE FUNCTION "sync_event_type_with_cube_type"() RETURNS trigger
LANGUAGE plpgsql AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        IF NEW."cube_type" IS NOT NULL THEN
            NEW."event_type" := NEW."cube_type";
        ELSE
            NEW."cube_type" := NEW."event_type";
        END IF;
    ELSIF NEW."cube_type" IS DISTINCT FROM OLD."cube_type" THEN
        NEW."event_type" := NEW."cube_type";
    ELSIF NEW."event_type" IS DISTINCT FROM OLD."event_type" THEN
        NEW."cube_type" := NEW."event_type";
    END IF;
    RETURN NEW;
END;
$$;

-- Nullable columns
ALTER TABLE "solve" ADD COLUMN "event_type" TEXT;
ALTER TABLE "demo_solve" ADD COLUMN "event_type" TEXT;

-- Required columns that default to 333
ALTER TABLE "setting" ADD COLUMN "event_type" TEXT NOT NULL DEFAULT '333',
ALTER COLUMN "cube_type" DROP NOT NULL,
ALTER COLUMN "cube_type" DROP DEFAULT;

ALTER TABLE "game_options" ADD COLUMN "event_type" TEXT NOT NULL DEFAULT '333',
ALTER COLUMN "cube_type" DROP NOT NULL,
ALTER COLUMN "cube_type" DROP DEFAULT;

-- Required columns without a default. The temporary default only fills existing rows without rewriting the table,
-- and is replaced with each row's cube_type by the backfill.
ALTER TABLE "elo_log" ADD COLUMN "event_type" TEXT NOT NULL DEFAULT '333',
ALTER COLUMN "cube_type" DROP NOT NULL;
ALTER TABLE "elo_log" ALTER COLUMN "event_type" DROP DEFAULT;

ALTER TABLE "match_lobby" ADD COLUMN "event_type" TEXT NOT NULL DEFAULT '333',
ALTER COLUMN "cube_type" DROP NOT NULL;
ALTER TABLE "match_lobby" ALTER COLUMN "event_type" DROP DEFAULT;

ALTER TABLE "top_solve" ADD COLUMN "event_type" TEXT NOT NULL DEFAULT '333',
ALTER COLUMN "cube_type" DROP NOT NULL;
ALTER TABLE "top_solve" ALTER COLUMN "event_type" DROP DEFAULT;

ALTER TABLE "top_average" ADD COLUMN "event_type" TEXT NOT NULL DEFAULT '333',
ALTER COLUMN "cube_type" DROP NOT NULL;
ALTER TABLE "top_average" ALTER COLUMN "event_type" DROP DEFAULT;

ALTER TABLE "custom_trainer" ADD COLUMN "event_type" TEXT NOT NULL DEFAULT '333',
ALTER COLUMN "cube_type" DROP NOT NULL;
ALTER TABLE "custom_trainer" ALTER COLUMN "event_type" DROP DEFAULT;

ALTER TABLE "trainer_algorithm" ADD COLUMN "event_type" TEXT NOT NULL DEFAULT '333',
ALTER COLUMN "cube_type" DROP NOT NULL;
ALTER TABLE "trainer_algorithm" ALTER COLUMN "event_type" DROP DEFAULT;

-- The catalog is a few thousand rows, so the index is rebuilt in place
DROP INDEX "trainer_algorithm_active_cube_type_algo_type_idx";
CREATE INDEX "trainer_algorithm_active_event_type_algo_type_idx" ON "trainer_algorithm"("active", "event_type", "algo_type");

CREATE TRIGGER "solve_sync_event_type" BEFORE INSERT OR UPDATE ON "solve"
    FOR EACH ROW EXECUTE FUNCTION "sync_event_type_with_cube_type"();
CREATE TRIGGER "demo_solve_sync_event_type" BEFORE INSERT OR UPDATE ON "demo_solve"
    FOR EACH ROW EXECUTE FUNCTION "sync_event_type_with_cube_type"();
CREATE TRIGGER "setting_sync_event_type" BEFORE INSERT OR UPDATE ON "setting"
    FOR EACH ROW EXECUTE FUNCTION "sync_event_type_with_cube_type"();
CREATE TRIGGER "game_options_sync_event_type" BEFORE INSERT OR UPDATE ON "game_options"
    FOR EACH ROW EXECUTE FUNCTION "sync_event_type_with_cube_type"();
CREATE TRIGGER "elo_log_sync_event_type" BEFORE INSERT OR UPDATE ON "elo_log"
    FOR EACH ROW EXECUTE FUNCTION "sync_event_type_with_cube_type"();
CREATE TRIGGER "match_lobby_sync_event_type" BEFORE INSERT OR UPDATE ON "match_lobby"
    FOR EACH ROW EXECUTE FUNCTION "sync_event_type_with_cube_type"();
CREATE TRIGGER "top_solve_sync_event_type" BEFORE INSERT OR UPDATE ON "top_solve"
    FOR EACH ROW EXECUTE FUNCTION "sync_event_type_with_cube_type"();
CREATE TRIGGER "top_average_sync_event_type" BEFORE INSERT OR UPDATE ON "top_average"
    FOR EACH ROW EXECUTE FUNCTION "sync_event_type_with_cube_type"();
CREATE TRIGGER "custom_trainer_sync_event_type" BEFORE INSERT OR UPDATE ON "custom_trainer"
    FOR EACH ROW EXECUTE FUNCTION "sync_event_type_with_cube_type"();
CREATE TRIGGER "trainer_algorithm_sync_event_type" BEFORE INSERT OR UPDATE ON "trainer_algorithm"
    FOR EACH ROW EXECUTE FUNCTION "sync_event_type_with_cube_type"();

-- custom_cube_type becomes custom_event_type. Old servers keep using the old name through a view, which Postgres can
-- insert, update, and delete through as if it were the table. The view is dropped in phase 2.
ALTER TABLE "custom_cube_type" RENAME TO "custom_event_type";
ALTER TABLE "custom_event_type" RENAME CONSTRAINT "custom_cube_type_pkey" TO "custom_event_type_pkey";
ALTER TABLE "custom_event_type" RENAME CONSTRAINT "custom_cube_type_user_id_fkey" TO "custom_event_type_user_id_fkey";
ALTER INDEX "custom_cube_type_user_id_idx" RENAME TO "custom_event_type_user_id_idx";
CREATE VIEW "custom_cube_type" AS SELECT * FROM "custom_event_type";
