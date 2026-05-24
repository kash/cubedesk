/*
  Warnings:

  - You are about to drop the column `game_type` on the `solve` table. All the data in the column will be lost.
  - You are about to drop the `game_solve` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "game_solve" DROP CONSTRAINT "game_solve_game_session_id_fkey";

-- DropForeignKey
ALTER TABLE "game_solve" DROP CONSTRAINT "game_solve_solve_id_fkey";

-- DropForeignKey
ALTER TABLE "game_solve" DROP CONSTRAINT "game_solve_user_id_fkey";

-- DropIndex
DROP INDEX "solve_game_type_idx";

-- AlterTable
ALTER TABLE "solve" DROP COLUMN "game_type",
ADD COLUMN     "from_timer" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "game_session_id" TEXT;

-- DropTable
DROP TABLE "game_solve";

-- CreateIndex
CREATE INDEX "solve_from_timer_idx" ON "solve"("from_timer");

-- AddForeignKey
ALTER TABLE "solve" ADD CONSTRAINT "solve_game_session_id_fkey" FOREIGN KEY ("game_session_id") REFERENCES "game_session"("id") ON DELETE SET NULL ON UPDATE CASCADE;
