/*
  Warnings:

  - You are about to drop the column `alog_type` on the `custom_trainer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "custom_trainer" DROP COLUMN "alog_type",
ADD COLUMN     "algo_type" TEXT NOT NULL DEFAULT E'Custom';
