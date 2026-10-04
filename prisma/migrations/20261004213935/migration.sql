/*
  Warnings:

  - You are about to drop the column `custom_scramble` on the `solve` table. All the data in the column will be lost.
  - You are about to drop the column `smart_put_down_time` on the `solve` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "solve" DROP COLUMN "custom_scramble",
DROP COLUMN "smart_put_down_time";
