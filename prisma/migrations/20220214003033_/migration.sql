/*
  Warnings:

  - You are about to drop the `training_session` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "solve" DROP CONSTRAINT "solve_training_session_id_fkey";

-- DropForeignKey
ALTER TABLE "training_session" DROP CONSTRAINT "training_session_user_id_fkey";

-- DropTable
DROP TABLE "training_session";
