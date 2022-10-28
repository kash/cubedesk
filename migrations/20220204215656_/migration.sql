-- CreateEnum
CREATE TYPE "TrainingSessionType" AS ENUM ('SINGLE', 'MULTI');

-- CreateTable
CREATE TABLE "training_session" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "training_session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "training_session_user_id_idx" ON "training_session"("user_id");

-- CreateIndex
CREATE INDEX "solve_training_session_id_idx" ON "solve"("training_session_id");

-- AddForeignKey
ALTER TABLE "solve" ADD CONSTRAINT "solve_training_session_id_fkey" FOREIGN KEY ("training_session_id") REFERENCES "training_session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "training_session" ADD CONSTRAINT "training_session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
