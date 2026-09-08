CREATE TYPE "ImportSource" AS ENUM ('cstimer', 'cubedesk');
CREATE TYPE "ImportStatus" AS ENUM ('pending', 'succeeded', 'failed');
CREATE TABLE "import_attempt" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "source" "ImportSource" NOT NULL,
    "status" "ImportStatus" NOT NULL DEFAULT 'pending',
    "request_hash" TEXT NOT NULL,
    "requested_sessions" INTEGER NOT NULL,
    "requested_solves" INTEGER NOT NULL,
    "saved_sessions" INTEGER NOT NULL DEFAULT 0,
    "saved_solves" INTEGER NOT NULL DEFAULT 0,
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed_at" TIMESTAMP(3),
    "failure_code" TEXT,
    CONSTRAINT "import_attempt_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "import_attempt_started_at_idx" ON "import_attempt"("started_at");
CREATE INDEX "import_attempt_user_id_started_at_idx" ON "import_attempt"("user_id", "started_at");
ALTER TABLE "import_attempt" ADD CONSTRAINT "import_attempt_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
