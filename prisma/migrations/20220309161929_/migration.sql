/*
  Warnings:

  - You are about to drop the column `default_solution` on the `custom_trainer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "custom_trainer" DROP COLUMN "default_solution",
ADD COLUMN     "alog_type" TEXT NOT NULL DEFAULT E'custom',
ADD COLUMN     "group_name" TEXT,
ADD COLUMN     "scrambles" TEXT,
ADD COLUMN     "solution" TEXT;

-- AlterTable
ALTER TABLE "match" ADD COLUMN     "aborted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "match_participant" ADD COLUMN     "abandoned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "aborted" BOOLEAN NOT NULL DEFAULT false;
