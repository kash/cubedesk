-- AlterTable
ALTER TABLE "ad_view" ADD COLUMN     "last_session_started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
