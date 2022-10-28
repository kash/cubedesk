-- DropForeignKey
ALTER TABLE "custom_cube_type" DROP CONSTRAINT "custom_cube_type_user_id_fkey";

-- AlterTable
ALTER TABLE "setting" ADD COLUMN     "inspection_auto_start" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "custom_cube_type" ADD CONSTRAINT "custom_cube_type_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "setting"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
