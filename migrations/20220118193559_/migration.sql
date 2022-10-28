-- CreateIndex
CREATE INDEX "ban_log_banned_user_id_idx" ON "ban_log"("banned_user_id");

-- CreateIndex
CREATE INDEX "notification_created_at_idx" ON "notification"("created_at");
