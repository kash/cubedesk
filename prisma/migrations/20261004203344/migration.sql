-- CreateTable
CREATE TABLE "solve_method_step" (
    "id" TEXT NOT NULL,
    "solve_id" TEXT NOT NULL,
    "turn_count" INTEGER NOT NULL,
    "turns" TEXT,
    "method_name" TEXT NOT NULL,
    "step_index" INTEGER NOT NULL,
    "step_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total_time" DOUBLE PRECISION,
    "tps" DOUBLE PRECISION,
    "parent_name" TEXT,
    "recognition_time" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "skipped" BOOLEAN NOT NULL DEFAULT false,
    "oll_case_key" TEXT,
    "pll_case_key" TEXT,

    CONSTRAINT "solve_method_step_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "solve_method_step_solve_id_idx" ON "solve_method_step"("solve_id");

-- AddForeignKey
ALTER TABLE "solve_method_step" ADD CONSTRAINT "solve_method_step_solve_id_fkey" FOREIGN KEY ("solve_id") REFERENCES "solve"("id") ON DELETE CASCADE ON UPDATE CASCADE;
