-- CreateTable
CREATE TABLE "elo_log" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "opponent_id" TEXT NOT NULL,
    "cube_type" TEXT NOT NULL,
    "elo_change" INTEGER NOT NULL DEFAULT 0,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "elo_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "elo_log_user_id_idx" ON "elo_log"("user_id");

-- CreateIndex
CREATE INDEX "elo_log_opponent_id_idx" ON "elo_log"("opponent_id");

-- AddForeignKey
ALTER TABLE "elo_log" ADD CONSTRAINT "elo_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
