-- DropForeignKey
ALTER TABLE "top_average" DROP CONSTRAINT "top_average_user_id_fkey";

-- AddForeignKey
ALTER TABLE "top_average" ADD CONSTRAINT "top_average_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
