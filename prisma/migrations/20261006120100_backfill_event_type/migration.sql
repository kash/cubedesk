-- Copies cube_type into event_type for rows that existed before the previous migration. Rows written since then
-- are already kept in sync by its trigger.
--
-- Rows are updated in batches of primary keys, each committed on its own, so no batch holds row locks for long and
-- an interrupted run keeps its progress. Rerunning it only touches rows that still differ. Committing inside DO is
-- only allowed outside a transaction block, so this must be the only statement in its migration.
DO $$
DECLARE
    table_name TEXT;
    last_id TEXT;
    batch_end TEXT;
BEGIN
    FOREACH table_name IN ARRAY ARRAY[
        'setting', 'game_options', 'elo_log', 'match_lobby', 'top_solve', 'top_average', 'custom_trainer',
        'trainer_algorithm', 'demo_solve', 'solve'
    ] LOOP
        last_id := '';
        LOOP
            EXECUTE format(
                'SELECT max(id) FROM (SELECT id FROM %I WHERE id > $1 ORDER BY id LIMIT 5000) AS batch',
                table_name
            ) INTO batch_end USING last_id;
            EXIT WHEN batch_end IS NULL;

            EXECUTE format(
                'UPDATE %I SET event_type = cube_type WHERE id > $1 AND id <= $2 AND event_type IS DISTINCT FROM cube_type',
                table_name
            ) USING last_id, batch_end;
            COMMIT;

            last_id := batch_end;
        END LOOP;
    END LOOP;
END;
$$;
