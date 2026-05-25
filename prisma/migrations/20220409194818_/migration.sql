/*
  Warnings:

  - A unique constraint covering the columns `[stripe_customer_id]` on the table `user_account` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_account_stripe_customer_id_key" ON "user_account"("stripe_customer_id");
