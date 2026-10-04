/*
  Warnings:

  - You are about to drop the `solve_method_step` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "solve_method_step" DROP CONSTRAINT "solve_method_step_solve_id_fkey";

-- DropTable
DROP TABLE "solve_method_step";
