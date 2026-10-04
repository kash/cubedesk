-- Unused, duplicate, or replaced by the smaller indexes created in the previous migrations
DROP INDEX "solve_created_at_idx";
DROP INDEX "solve_match_id_idx";
DROP INDEX "solve_game_session_id_idx";
DROP INDEX "solve_match_participant_id_idx";
DROP INDEX "solve_share_code_idx";
DROP INDEX "solve_bulk_idx";
DROP INDEX "solve_started_at_idx";
DROP INDEX "solve_from_timer_idx";
DROP INDEX "solve_training_session_id_idx";
DROP INDEX "solve_trainer_name_idx";

-- Unset values cost nothing to store, whereas a 0.0 default costs 8 bytes on every solve
ALTER TABLE "solve" ALTER COLUMN "inspection_time" DROP DEFAULT,
ALTER COLUMN "smart_put_down_time" DROP DEFAULT;
