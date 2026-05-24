-- CreateEnum
CREATE TYPE "AdLocation" AS ENUM ('MINI_TIMER_FOOTER');

-- CreateTable
CREATE TABLE "ad_view" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "ip_address" TEXT,
    "ad_key" TEXT NOT NULL,
    "location" "AdLocation" NOT NULL,
    "view_time_seconds" INTEGER NOT NULL,
    "browser_session_id" TEXT NOT NULL,
    "clicked_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ad_view_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ad_view_user_id_idx" ON "ad_view"("user_id");

-- CreateIndex
CREATE INDEX "ad_view_ad_key_idx" ON "ad_view"("ad_key");

-- CreateIndex
CREATE INDEX "ad_view_browser_session_id_idx" ON "ad_view"("browser_session_id");

-- AddForeignKey
ALTER TABLE "ad_view" ADD CONSTRAINT "ad_view_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;
