-- CreateTable
CREATE TABLE "demo_solve" (
    "id" TEXT NOT NULL,
    "demo_session_id" TEXT NOT NULL,
    "ip_address" TEXT,
    "raw_time" DOUBLE PRECISION,
    "cube_type" TEXT,
    "scramble" TEXT,
    "started_at" BIGINT,
    "ended_at" BIGINT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "demo_solve_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "demo_solve_demo_session_id_idx" ON "demo_solve"("demo_session_id");

-- CreateIndex
CREATE INDEX "demo_solve_created_at_idx" ON "demo_solve"("created_at");
