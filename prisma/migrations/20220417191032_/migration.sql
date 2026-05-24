/*
  Warnings:

  - You are about to drop the column `record_id` on the `report` table. All the data in the column will be lost.
  - You are about to drop the column `record_type` on the `report` table. All the data in the column will be lost.
  - You are about to drop the column `report_for_user_id` on the `report` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `report` table. All the data in the column will be lost.
  - Added the required column `created_by_id` to the `report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reported_user_id` to the `report` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "report" DROP CONSTRAINT "report_report_for_user_id_fkey";

-- DropForeignKey
ALTER TABLE "report" DROP CONSTRAINT "report_user_id_fkey";

-- AlterTable
ALTER TABLE "report" DROP COLUMN "record_id",
DROP COLUMN "record_type",
DROP COLUMN "report_for_user_id",
DROP COLUMN "user_id",
ADD COLUMN     "created_by_id" TEXT NOT NULL,
ADD COLUMN     "reported_user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_reported_user_id_fkey" FOREIGN KEY ("reported_user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
