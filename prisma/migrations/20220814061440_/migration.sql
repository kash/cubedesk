/*
  Warnings:

  - You are about to drop the column `pathame` on the `ad_view` table. All the data in the column will be lost.
  - Added the required column `pathname` to the `ad_view` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ad_view" DROP COLUMN "pathame",
ADD COLUMN     "pathname" TEXT NOT NULL;
