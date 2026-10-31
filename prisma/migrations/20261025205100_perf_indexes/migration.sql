-- DropIndex
DROP INDEX "notification_user_id_idx";

-- CreateIndex
CREATE INDEX "elo_rating_elo_333_rating_id_idx" ON "elo_rating"("elo_333_rating" DESC, "id");

-- CreateIndex
CREATE INDEX "notification_user_id_created_at_idx" ON "notification"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "solve_user_id_bulk_idx" ON "solve"("user_id") WHERE (bulk = true);

-- CreateIndex
CREATE INDEX "solve_user_id_match_present_idx" ON "solve"("user_id") WHERE (match_id IS NOT NULL);

-- CreateIndex
CREATE INDEX "top_average_event_type_time_idx" ON "top_average"("event_type", "time");

-- CreateIndex
CREATE INDEX "top_average_solve_1_id_idx" ON "top_average"("solve_1_id");

-- CreateIndex
CREATE INDEX "top_average_solve_2_id_idx" ON "top_average"("solve_2_id");

-- CreateIndex
CREATE INDEX "top_average_solve_3_id_idx" ON "top_average"("solve_3_id");

-- CreateIndex
CREATE INDEX "top_average_solve_4_id_idx" ON "top_average"("solve_4_id");

-- CreateIndex
CREATE INDEX "top_average_solve_5_id_idx" ON "top_average"("solve_5_id");

-- CreateIndex
CREATE INDEX "top_solve_event_type_time_idx" ON "top_solve"("event_type", "time");
