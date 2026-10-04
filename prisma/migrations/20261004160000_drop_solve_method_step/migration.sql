-- Steps are now derived from solve.smart_turns when a solve is read

-- DropForeignKey
ALTER TABLE "solve_method_step" DROP CONSTRAINT "solve_method_step_solve_id_fkey";

-- DropTable
DROP TABLE "solve_method_step";
