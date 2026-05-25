-- DropForeignKey
ALTER TABLE "custom_trainer" DROP CONSTRAINT "custom_trainer_user_id_fkey";

-- AlterTable
ALTER TABLE "custom_trainer_download" ADD CONSTRAINT "custom_trainer_download_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "custom_trainer_like" ADD CONSTRAINT "custom_trainer_like_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "custom_trainer" ADD CONSTRAINT "custom_trainer_copy_of_id_fkey" FOREIGN KEY ("copy_of_id") REFERENCES "custom_trainer"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "custom_trainer" ADD CONSTRAINT "custom_trainer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "custom_trainer_like" ADD CONSTRAINT "custom_trainer_like_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "custom_trainer_like" ADD CONSTRAINT "custom_trainer_like_custom_trainer_id_fkey" FOREIGN KEY ("custom_trainer_id") REFERENCES "custom_trainer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "custom_trainer_like" ADD CONSTRAINT "custom_trainer_like_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "custom_trainer_download" ADD CONSTRAINT "custom_trainer_download_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "custom_trainer_download" ADD CONSTRAINT "custom_trainer_download_new_trainer_id_fkey" FOREIGN KEY ("new_trainer_id") REFERENCES "custom_trainer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "custom_trainer_download" ADD CONSTRAINT "custom_trainer_download_source_trainer_id_fkey" FOREIGN KEY ("source_trainer_id") REFERENCES "custom_trainer"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "custom_trainer_download" ADD CONSTRAINT "custom_trainer_download_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainer_favorite" ADD CONSTRAINT "trainer_favorite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
