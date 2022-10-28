/*
  Warnings:

  - You are about to drop the column `resolved` on the `report` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "report" DROP COLUMN "resolved",
ADD COLUMN     "resolved_at" TIMESTAMP(3);
