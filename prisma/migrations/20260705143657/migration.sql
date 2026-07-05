/*
  Warnings:

  - You are about to drop the column `is_pro` on the `user_account` table. All the data in the column will be lost.
  - You are about to drop the column `stripe_customer_id` on the `user_account` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "user_account_stripe_customer_id_key";

-- AlterTable
ALTER TABLE "user_account" DROP COLUMN "is_pro",
DROP COLUMN "stripe_customer_id";
