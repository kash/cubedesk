-- DropForeignKey
ALTER TABLE "custom_trainer_download" DROP CONSTRAINT "custom_trainer_download_source_trainer_id_fkey";

-- AddForeignKey
ALTER TABLE "custom_trainer_download" ADD CONSTRAINT "custom_trainer_download_source_trainer_id_fkey" FOREIGN KEY ("source_trainer_id") REFERENCES "custom_trainer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
