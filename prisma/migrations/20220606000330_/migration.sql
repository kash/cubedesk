-- AlterTable
ALTER TABLE "notification_preference" ADD COLUMN     "elo_refund" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE INDEX "elo_log_match_id_idx" ON "elo_log"("match_id");
