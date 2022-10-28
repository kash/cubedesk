/*
  Warnings:

  - You are about to drop the column `icon` on the `custom_trainer` table. All the data in the column will be lost.
  - You are about to drop the column `inverse` on the `custom_trainer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "custom_trainer" DROP COLUMN "icon",
DROP COLUMN "inverse",
ADD COLUMN     "alt_solutions" TEXT,
ADD COLUMN     "three_d" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "alog_type" SET DEFAULT E'Custom';
