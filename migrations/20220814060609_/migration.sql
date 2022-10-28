/*
  Warnings:

  - You are about to drop the column `ad_location` on the `ad_view` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ad_view" DROP COLUMN "ad_location";

-- DropEnum
DROP TYPE "AdLocation";
