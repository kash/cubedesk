/*
  Warnings:

  - You are about to drop the column `location` on the `ad_view` table. All the data in the column will be lost.
  - Added the required column `ad_location` to the `ad_view` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pathame` to the `ad_view` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ad_view" DROP COLUMN "location",
ADD COLUMN     "ad_location" "AdLocation" NOT NULL,
ADD COLUMN     "pathame" TEXT NOT NULL;
