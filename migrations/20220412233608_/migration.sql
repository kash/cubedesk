-- DropForeignKey
ALTER TABLE "profile" DROP CONSTRAINT "profile_header_image_id_fkey";

-- DropForeignKey
ALTER TABLE "profile" DROP CONSTRAINT "profile_pfp_image_id_fkey";

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_header_image_id_fkey" FOREIGN KEY ("header_image_id") REFERENCES "image"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_pfp_image_id_fkey" FOREIGN KEY ("pfp_image_id") REFERENCES "image"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;
