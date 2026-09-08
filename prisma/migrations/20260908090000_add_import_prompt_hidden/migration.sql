ALTER TABLE "user_feature_state" ADD COLUMN "import_prompt_hidden" BOOLEAN NOT NULL DEFAULT false;

-- Remember existing importers even if they later delete their imported solves.
INSERT INTO "user_feature_state" ("id", "user_id", "import_prompt_hidden", "updated_at")
SELECT gen_random_uuid()::text, "user_id", true, CURRENT_TIMESTAMP
FROM "solve"
WHERE "bulk" = true
GROUP BY "user_id"
ON CONFLICT ("user_id") DO UPDATE
SET "import_prompt_hidden" = true, "updated_at" = CURRENT_TIMESTAMP;
