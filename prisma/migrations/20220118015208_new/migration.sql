/*
  Warnings:

  - You are about to drop the column `hidden` on the `custom_cube_type` table. All the data in the column will be lost.
  - You are about to drop the column `is_player` on the `match_participant` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "GameType" ADD VALUE 'HEAD_TO_HEAD';

-- DropForeignKey
ALTER TABLE "action_log" DROP CONSTRAINT "action_log_user_email_fkey";

-- DropForeignKey
ALTER TABLE "algorithm_override" DROP CONSTRAINT "algorithm_override_user_id_fkey";

-- DropForeignKey
ALTER TABLE "badge" DROP CONSTRAINT "badge_badge_type_id_fkey";

-- DropForeignKey
ALTER TABLE "badge" DROP CONSTRAINT "badge_user_id_fkey";

-- DropForeignKey
ALTER TABLE "badge_type" DROP CONSTRAINT "badge_type_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "ban_log" DROP CONSTRAINT "ban_log_banned_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ban_log" DROP CONSTRAINT "ban_log_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "chat_message" DROP CONSTRAINT "chat_message_match_session_id_fkey";

-- DropForeignKey
ALTER TABLE "chat_message" DROP CONSTRAINT "chat_message_user_id_fkey";

-- DropForeignKey
ALTER TABLE "custom_cube_type" DROP CONSTRAINT "custom_cube_type_user_id_fkey";

-- DropForeignKey
ALTER TABLE "email_log" DROP CONSTRAINT "email_log_user_id_fkey";

-- DropForeignKey
ALTER TABLE "forgot_password" DROP CONSTRAINT "forgot_password_user_id_fkey";

-- DropForeignKey
ALTER TABLE "friendship" DROP CONSTRAINT "friendship_friendship_request_id_fkey";

-- DropForeignKey
ALTER TABLE "friendship" DROP CONSTRAINT "friendship_other_user_id_fkey";

-- DropForeignKey
ALTER TABLE "friendship" DROP CONSTRAINT "friendship_user_id_fkey";

-- DropForeignKey
ALTER TABLE "friendship_request" DROP CONSTRAINT "friendship_request_from_id_fkey";

-- DropForeignKey
ALTER TABLE "friendship_request" DROP CONSTRAINT "friendship_request_to_id_fkey";

-- DropForeignKey
ALTER TABLE "game_solve" DROP CONSTRAINT "game_solve_game_session_id_fkey";

-- DropForeignKey
ALTER TABLE "game_solve" DROP CONSTRAINT "game_solve_solve_id_fkey";

-- DropForeignKey
ALTER TABLE "game_solve" DROP CONSTRAINT "game_solve_user_id_fkey";

-- DropForeignKey
ALTER TABLE "image" DROP CONSTRAINT "image_user_id_fkey";

-- DropForeignKey
ALTER TABLE "integration" DROP CONSTRAINT "integration_user_id_fkey";

-- DropForeignKey
ALTER TABLE "match" DROP CONSTRAINT "match_match_session_id_fkey";

-- DropForeignKey
ALTER TABLE "match" DROP CONSTRAINT "match_winner_id_fkey";

-- DropForeignKey
ALTER TABLE "match_participant" DROP CONSTRAINT "match_participant_match_id_fkey";

-- DropForeignKey
ALTER TABLE "match_participant" DROP CONSTRAINT "match_participant_user_id_fkey";

-- DropForeignKey
ALTER TABLE "match_session" DROP CONSTRAINT "match_session_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "notification" DROP CONSTRAINT "notification_triggering_user_id_fkey";

-- DropForeignKey
ALTER TABLE "notification_preference" DROP CONSTRAINT "notification_preference_user_id_fkey";

-- DropForeignKey
ALTER TABLE "profile" DROP CONSTRAINT "profile_header_image_id_fkey";

-- DropForeignKey
ALTER TABLE "profile" DROP CONSTRAINT "profile_pfp_image_id_fkey";

-- DropForeignKey
ALTER TABLE "profile_view" DROP CONSTRAINT "profile_view_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "profile_view" DROP CONSTRAINT "profile_view_profile_user_id_fkey";

-- DropForeignKey
ALTER TABLE "profile_view" DROP CONSTRAINT "profile_view_viewer_id_fkey";

-- DropForeignKey
ALTER TABLE "report" DROP CONSTRAINT "report_report_for_user_id_fkey";

-- DropForeignKey
ALTER TABLE "report" DROP CONSTRAINT "report_user_id_fkey";

-- DropForeignKey
ALTER TABLE "session" DROP CONSTRAINT "session_user_id_fkey";

-- DropForeignKey
ALTER TABLE "setting" DROP CONSTRAINT "setting_user_id_fkey";

-- DropForeignKey
ALTER TABLE "smart_device" DROP CONSTRAINT "smart_device_user_id_fkey";

-- DropForeignKey
ALTER TABLE "solve" DROP CONSTRAINT "solve_match_id_fkey";

-- DropForeignKey
ALTER TABLE "solve" DROP CONSTRAINT "solve_match_participant_id_fkey";

-- DropForeignKey
ALTER TABLE "solve" DROP CONSTRAINT "solve_session_id_fkey";

-- DropForeignKey
ALTER TABLE "solve" DROP CONSTRAINT "solve_smart_device_id_fkey";

-- DropForeignKey
ALTER TABLE "solve" DROP CONSTRAINT "solve_user_id_fkey";

-- DropForeignKey
ALTER TABLE "solve_method_step" DROP CONSTRAINT "solve_method_step_solve_id_fkey";

-- DropForeignKey
ALTER TABLE "solve_view" DROP CONSTRAINT "solve_view_solve_id_fkey";

-- DropForeignKey
ALTER TABLE "solve_view" DROP CONSTRAINT "solve_view_user_id_fkey";

-- DropForeignKey
ALTER TABLE "solve_view" DROP CONSTRAINT "solve_view_viewer_id_fkey";

-- DropForeignKey
ALTER TABLE "timer_background" DROP CONSTRAINT "timer_background_user_id_fkey";

-- DropForeignKey
ALTER TABLE "top_average" DROP CONSTRAINT "top_average_solve_1_id_fkey";

-- DropForeignKey
ALTER TABLE "top_average" DROP CONSTRAINT "top_average_solve_2_id_fkey";

-- DropForeignKey
ALTER TABLE "top_average" DROP CONSTRAINT "top_average_solve_3_id_fkey";

-- DropForeignKey
ALTER TABLE "top_average" DROP CONSTRAINT "top_average_solve_4_id_fkey";

-- DropForeignKey
ALTER TABLE "top_average" DROP CONSTRAINT "top_average_solve_5_id_fkey";

-- DropForeignKey
ALTER TABLE "top_solve" DROP CONSTRAINT "top_solve_solve_id_fkey";

-- DropForeignKey
ALTER TABLE "top_solve" DROP CONSTRAINT "top_solve_user_id_fkey";

-- DropForeignKey
ALTER TABLE "trainer_favorite" DROP CONSTRAINT "trainer_favorite_user_id_fkey";

-- DropIndex
DROP INDEX "custom_trainer_download_pkey";

-- DropIndex
DROP INDEX "custom_trainer_like_pkey";

-- DropIndex
DROP INDEX "game_session_pkey";

-- DropIndex
DROP INDEX "game_solve_pkey";

-- AlterTable
ALTER TABLE "action_log" ALTER COLUMN "user_email" DROP NOT NULL;

-- AlterTable
ALTER TABLE "custom_cube_type" DROP COLUMN "hidden";

-- AlterTable
ALTER TABLE "email_log" ALTER COLUMN "user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "game_session" ADD CONSTRAINT "game_session_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "game_solve" ADD CONSTRAINT "game_solve_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "match_participant" DROP COLUMN "is_player";

-- CreateTable
CREATE TABLE "game_options" (
    "id" TEXT NOT NULL,
    "game_session_id" TEXT,
    "match_session_id" TEXT,
    "game_type" "GameType" NOT NULL,
    "cube_type" TEXT NOT NULL DEFAULT E'333',
    "elimination_starting_time_seconds" INTEGER NOT NULL DEFAULT 30,
    "elimination_percent_change_rate" INTEGER NOT NULL DEFAULT 5,
    "head_to_head_target_win_count" INTEGER NOT NULL DEFAULT 5,
    "gauntlet_time_multiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.0,

    CONSTRAINT "game_options_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "game_options_game_session_id_idx" ON "game_options"("game_session_id");

-- CreateIndex
CREATE INDEX "game_options_match_session_id_idx" ON "game_options"("match_session_id");

-- CreateIndex
CREATE INDEX "custom_trainer_download_creator_id_idx" ON "custom_trainer_download"("creator_id");

-- CreateIndex
CREATE INDEX "custom_trainer_download_new_trainer_id_idx" ON "custom_trainer_download"("new_trainer_id");

-- CreateIndex
CREATE INDEX "custom_trainer_download_source_trainer_id_idx" ON "custom_trainer_download"("source_trainer_id");

-- CreateIndex
CREATE INDEX "custom_trainer_download_user_id_idx" ON "custom_trainer_download"("user_id");

-- CreateIndex
CREATE INDEX "custom_trainer_like_creator_id_idx" ON "custom_trainer_like"("creator_id");

-- CreateIndex
CREATE INDEX "custom_trainer_like_custom_trainer_id_idx" ON "custom_trainer_like"("custom_trainer_id");

-- CreateIndex
CREATE INDEX "custom_trainer_like_user_id_idx" ON "custom_trainer_like"("user_id");

-- CreateIndex
CREATE INDEX "friendship_friendship_request_id_idx" ON "friendship"("friendship_request_id");

-- CreateIndex
CREATE INDEX "friendship_other_user_id_idx" ON "friendship"("other_user_id");

-- CreateIndex
CREATE INDEX "solve_created_at_idx" ON "solve"("created_at");

-- CreateIndex
CREATE INDEX "solve_game_type_idx" ON "solve"("game_type");

-- CreateIndex
CREATE INDEX "solve_started_at_idx" ON "solve"("started_at");

-- CreateIndex
CREATE INDEX "solve_trainer_name_idx" ON "solve"("trainer_name");

-- CreateIndex
CREATE INDEX "top_average_time_idx" ON "top_average"("time");

-- CreateIndex
CREATE INDEX "top_solve_time_idx" ON "top_solve"("time");

-- AddForeignKey
ALTER TABLE "integration" ADD CONSTRAINT "integration_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_triggering_user_id_fkey" FOREIGN KEY ("triggering_user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action_log" ADD CONSTRAINT "action_log_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "user_account"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_preference" ADD CONSTRAINT "notification_preference_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendship_request" ADD CONSTRAINT "friendship_request_from_id_fkey" FOREIGN KEY ("from_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendship_request" ADD CONSTRAINT "friendship_request_to_id_fkey" FOREIGN KEY ("to_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendship" ADD CONSTRAINT "friendship_friendship_request_id_fkey" FOREIGN KEY ("friendship_request_id") REFERENCES "friendship_request"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendship" ADD CONSTRAINT "friendship_other_user_id_fkey" FOREIGN KEY ("other_user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendship" ADD CONSTRAINT "friendship_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_header_image_id_fkey" FOREIGN KEY ("header_image_id") REFERENCES "image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_pfp_image_id_fkey" FOREIGN KEY ("pfp_image_id") REFERENCES "image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_view" ADD CONSTRAINT "profile_view_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_view" ADD CONSTRAINT "profile_view_profile_user_id_fkey" FOREIGN KEY ("profile_user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_view" ADD CONSTRAINT "profile_view_viewer_id_fkey" FOREIGN KEY ("viewer_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forgot_password" ADD CONSTRAINT "forgot_password_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve" ADD CONSTRAINT "solve_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "match"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve" ADD CONSTRAINT "solve_match_participant_id_fkey" FOREIGN KEY ("match_participant_id") REFERENCES "match_participant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve" ADD CONSTRAINT "solve_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve" ADD CONSTRAINT "solve_smart_device_id_fkey" FOREIGN KEY ("smart_device_id") REFERENCES "smart_device"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve" ADD CONSTRAINT "solve_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "email_log" ADD CONSTRAINT "email_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_session" ADD CONSTRAINT "match_session_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match" ADD CONSTRAINT "match_match_session_id_fkey" FOREIGN KEY ("match_session_id") REFERENCES "match_session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match" ADD CONSTRAINT "match_winner_id_fkey" FOREIGN KEY ("winner_id") REFERENCES "user_account"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_participant" ADD CONSTRAINT "match_participant_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "match"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_participant" ADD CONSTRAINT "match_participant_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_message" ADD CONSTRAINT "chat_message_match_session_id_fkey" FOREIGN KEY ("match_session_id") REFERENCES "match_session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_message" ADD CONSTRAINT "chat_message_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "smart_device" ADD CONSTRAINT "smart_device_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve_method_step" ADD CONSTRAINT "solve_method_step_solve_id_fkey" FOREIGN KEY ("solve_id") REFERENCES "solve"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "badge_type" ADD CONSTRAINT "badge_type_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "badge" ADD CONSTRAINT "badge_badge_type_id_fkey" FOREIGN KEY ("badge_type_id") REFERENCES "badge_type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "badge" ADD CONSTRAINT "badge_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timer_background" ADD CONSTRAINT "timer_background_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_report_for_user_id_fkey" FOREIGN KEY ("report_for_user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ban_log" ADD CONSTRAINT "ban_log_banned_user_id_fkey" FOREIGN KEY ("banned_user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ban_log" ADD CONSTRAINT "ban_log_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_account"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve_view" ADD CONSTRAINT "solve_view_solve_id_fkey" FOREIGN KEY ("solve_id") REFERENCES "solve"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve_view" ADD CONSTRAINT "solve_view_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve_view" ADD CONSTRAINT "solve_view_viewer_id_fkey" FOREIGN KEY ("viewer_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_options" ADD CONSTRAINT "game_options_game_session_id_fkey" FOREIGN KEY ("game_session_id") REFERENCES "game_session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_options" ADD CONSTRAINT "game_options_match_session_id_fkey" FOREIGN KEY ("match_session_id") REFERENCES "match_session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_solve" ADD CONSTRAINT "game_solve_game_session_id_fkey" FOREIGN KEY ("game_session_id") REFERENCES "game_session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_solve" ADD CONSTRAINT "game_solve_solve_id_fkey" FOREIGN KEY ("solve_id") REFERENCES "solve"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_solve" ADD CONSTRAINT "game_solve_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_solve" ADD CONSTRAINT "top_solve_solve_id_fkey" FOREIGN KEY ("solve_id") REFERENCES "solve"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_solve" ADD CONSTRAINT "top_solve_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_average" ADD CONSTRAINT "top_average_solve_1_id_fkey" FOREIGN KEY ("solve_1_id") REFERENCES "solve"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_average" ADD CONSTRAINT "top_average_solve_2_id_fkey" FOREIGN KEY ("solve_2_id") REFERENCES "solve"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_average" ADD CONSTRAINT "top_average_solve_3_id_fkey" FOREIGN KEY ("solve_3_id") REFERENCES "solve"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_average" ADD CONSTRAINT "top_average_solve_4_id_fkey" FOREIGN KEY ("solve_4_id") REFERENCES "solve"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_average" ADD CONSTRAINT "top_average_solve_5_id_fkey" FOREIGN KEY ("solve_5_id") REFERENCES "solve"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "algorithm_override" ADD CONSTRAINT "algorithm_override_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setting" ADD CONSTRAINT "setting_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "custom_cube_type" ADD CONSTRAINT "custom_cube_type_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
