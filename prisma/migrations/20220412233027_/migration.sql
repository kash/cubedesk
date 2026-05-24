/*
  Warnings:

  - A unique constraint covering the columns `[header_image_id]` on the table `profile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pfp_image_id]` on the table `profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "profile_header_image_id_key" ON "profile"("header_image_id");

-- CreateIndex
CREATE UNIQUE INDEX "profile_pfp_image_id_key" ON "profile"("pfp_image_id");
