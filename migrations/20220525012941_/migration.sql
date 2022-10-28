-- DropIndex
DROP INDEX "solve_created_at_idx";

-- CreateIndex
CREATE INDEX "solve_created_at_idx" ON "solve"("created_at" DESC);
