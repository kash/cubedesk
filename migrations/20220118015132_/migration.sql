-- CreateEnum
CREATE TYPE "GameType" AS ENUM ('ELIMINATION', 'GAUNTLET');

-- CreateTable
CREATE TABLE "action_log" (
    "id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "action_type" TEXT NOT NULL,
    "action_details" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "action_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "algorithm_override" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "rotate" INTEGER,
    "cube_key" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "solution" TEXT,

    CONSTRAINT "algorithm_override_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "badge" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "badge_type_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "badge_type" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "color" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "created_by_id" TEXT,

    CONSTRAINT "badge_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ban_log" (
    "id" TEXT NOT NULL,
    "created_by_id" TEXT NOT NULL,
    "banned_user_id" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "banned_until" TIMESTAMP(3),
    "minutes" INTEGER DEFAULT -1,
    "forever" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ban_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_message" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "match_session_id" TEXT,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bad_words" BOOLEAN NOT NULL DEFAULT false,
    "raw_message" TEXT,

    CONSTRAINT "chat_message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "custom_cube_type" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hidden" BOOLEAN NOT NULL DEFAULT false,
    "scramble" TEXT NOT NULL,
    "private" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "custom_cube_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "custom_trainer" (
    "id" TEXT NOT NULL,
    "default_solution" TEXT,
    "colors" TEXT,
    "icon" TEXT,
    "cube_type" TEXT NOT NULL,
    "inverse" TEXT,
    "key" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "like_count" INTEGER NOT NULL DEFAULT 0,
    "private" BOOLEAN NOT NULL DEFAULT false,
    "copy_of_id" TEXT,
    "description" TEXT,
    "downloaded" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "custom_trainer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "custom_trainer_download" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "creator_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "new_trainer_id" TEXT,
    "source_trainer_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "custom_trainer_like" (
    "id" TEXT NOT NULL,
    "custom_trainer_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creator_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "email_log" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "template" TEXT NOT NULL,
    "vars" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,

    CONSTRAINT "email_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forgot_password" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "claimed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "forgot_password_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "friendship" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "other_user_id" TEXT NOT NULL,
    "friendship_request_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "friendship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "friendship_request" (
    "id" TEXT NOT NULL,
    "from_id" TEXT NOT NULL,
    "to_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accepted_at" TIMESTAMP(3),

    CONSTRAINT "friendship_request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_session" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "match_id" TEXT,
    "game_type" "GameType" NOT NULL,
    "solve_count" INTEGER NOT NULL DEFAULT 0,
    "total_time" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "game_solve" (
    "id" TEXT NOT NULL,
    "solve_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "game_session_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "meta_id" TEXT
);

-- CreateTable
CREATE TABLE "image" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "url" TEXT,
    "storage_path" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "integration" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "service_name" TEXT NOT NULL,
    "auth_token" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "auth_expires_at" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "integration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match" (
    "id" TEXT NOT NULL,
    "winner_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "link_code" TEXT NOT NULL,
    "match_session_id" TEXT NOT NULL,
    "ended_at" TIMESTAMP(3),
    "started_at" TIMESTAMP(3),
    "spectate_code" TEXT,

    CONSTRAINT "match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_participant" (
    "id" TEXT NOT NULL,
    "match_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "is_player" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resigned" BOOLEAN NOT NULL DEFAULT false,
    "forfeited" BOOLEAN NOT NULL DEFAULT false,
    "position" INTEGER NOT NULL DEFAULT 0,
    "won" BOOLEAN NOT NULL DEFAULT false,
    "lost" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "match_participant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_session" (
    "id" TEXT NOT NULL,
    "min_players" INTEGER NOT NULL DEFAULT 2,
    "max_players" INTEGER NOT NULL DEFAULT 2,
    "match_type" TEXT NOT NULL,
    "custom_match" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_id" TEXT,

    CONSTRAINT "match_session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "notification_type" TEXT NOT NULL,
    "triggering_user_id" TEXT,
    "read_at" TIMESTAMP(3),
    "message" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notification_category_name" TEXT NOT NULL,
    "link_text" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "in_app_message" TEXT,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification_preference" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "friend_request" BOOLEAN NOT NULL DEFAULT true,
    "friend_request_accept" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_preference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "header_image_id" TEXT,
    "pfp_image_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bio" TEXT,
    "favorite_event" TEXT,
    "main_three_cube" TEXT,
    "three_goal" TEXT,
    "three_method" TEXT,
    "reddit_link" TEXT,
    "twitch_link" TEXT,
    "youtube_link" TEXT,
    "twitter_link" TEXT,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_view" (
    "id" TEXT NOT NULL,
    "viewer_id" TEXT,
    "profile_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "profile_user_id" TEXT NOT NULL,

    CONSTRAINT "profile_view_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "record_id" TEXT NOT NULL,
    "record_type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolved" BOOLEAN NOT NULL DEFAULT false,
    "reason" TEXT,
    "report_for_user_id" TEXT,

    CONSTRAINT "report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "setting" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "focus_mode" BOOLEAN NOT NULL DEFAULT false,
    "freeze_time" DOUBLE PRECISION NOT NULL DEFAULT 0.2,
    "inspection" BOOLEAN NOT NULL DEFAULT false,
    "manual_entry" BOOLEAN NOT NULL DEFAULT false,
    "inspection_delay" INTEGER NOT NULL DEFAULT 15,
    "inverse_time_list" BOOLEAN NOT NULL DEFAULT false,
    "hide_time_when_solving" BOOLEAN NOT NULL DEFAULT false,
    "nav_collapsed" BOOLEAN NOT NULL DEFAULT false,
    "pb_confetti" BOOLEAN NOT NULL DEFAULT true,
    "play_inspection_sound" BOOLEAN NOT NULL DEFAULT false,
    "zero_out_time_after_solve" BOOLEAN NOT NULL DEFAULT false,
    "confirm_delete_solve" BOOLEAN NOT NULL DEFAULT false,
    "require_period_in_manual_time_entry" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cube_type" TEXT NOT NULL DEFAULT E'333',
    "session_id" TEXT,
    "timer_decimal_points" INTEGER NOT NULL DEFAULT 2,
    "beta_tester" BOOLEAN NOT NULL DEFAULT false,
    "use_space_with_smart_cube" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "setting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "smart_device" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "internal_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "device_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "smart_device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solve" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "raw_time" DOUBLE PRECISION,
    "cube_type" TEXT,
    "scramble" TEXT,
    "session_id" TEXT,
    "started_at" BIGINT,
    "ended_at" BIGINT,
    "dnf" BOOLEAN NOT NULL DEFAULT false,
    "plus_two" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "trainer_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bulk" BOOLEAN NOT NULL DEFAULT false,
    "game_type" TEXT,
    "inspection_time" DOUBLE PRECISION DEFAULT 0.0,
    "is_smart_cube" BOOLEAN NOT NULL DEFAULT false,
    "smart_put_down_time" DOUBLE PRECISION DEFAULT 0.0,
    "smart_turns" TEXT,
    "smart_turn_count" INTEGER,
    "smart_device_id" TEXT,
    "match_id" TEXT,
    "match_participant_id" TEXT,
    "share_code" TEXT,

    CONSTRAINT "solve_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solve_method_step" (
    "id" TEXT NOT NULL,
    "solve_id" TEXT NOT NULL,
    "turn_count" INTEGER NOT NULL,
    "turns" TEXT,
    "method_name" TEXT NOT NULL,
    "step_index" INTEGER NOT NULL,
    "step_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total_time" DOUBLE PRECISION,
    "tps" DOUBLE PRECISION,
    "parent_name" TEXT,
    "recognition_time" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "skipped" BOOLEAN NOT NULL DEFAULT false,
    "oll_case_key" TEXT,
    "pll_case_key" TEXT,

    CONSTRAINT "solve_method_step_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solve_view" (
    "id" TEXT NOT NULL,
    "solve_id" TEXT NOT NULL,
    "viewer_id" TEXT,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "solve_view_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timer_background" (
    "id" TEXT NOT NULL,
    "url" TEXT,
    "storage_path" TEXT,
    "user_id" TEXT NOT NULL,
    "hex" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "timer_background_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "top_average" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "cube_type" TEXT NOT NULL,
    "solve_1_id" TEXT NOT NULL,
    "solve_2_id" TEXT NOT NULL,
    "solve_3_id" TEXT NOT NULL,
    "solve_4_id" TEXT NOT NULL,
    "solve_5_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "top_average_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "top_solve" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "solve_id" TEXT NOT NULL,
    "cube_type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "top_solve_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trainer_favorite" (
    "id" TEXT NOT NULL,
    "cube_key" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "trainer_favorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_account" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "join_ip" TEXT NOT NULL,
    "join_country" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_name" TEXT NOT NULL,
    "username" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "banned_forever" BOOLEAN NOT NULL DEFAULT false,
    "banned_until" TIMESTAMP(3),

    CONSTRAINT "user_account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "algorithm_override_user_id_idx" ON "algorithm_override"("user_id");

-- CreateIndex
CREATE INDEX "badge_user_id_idx" ON "badge"("user_id");

-- CreateIndex
CREATE INDEX "chat_message_match_session_id_idx" ON "chat_message"("match_session_id");

-- CreateIndex
CREATE INDEX "chat_message_user_id_idx" ON "chat_message"("user_id");

-- CreateIndex
CREATE INDEX "custom_cube_type_user_id_idx" ON "custom_cube_type"("user_id");

-- CreateIndex
CREATE INDEX "custom_trainer_user_id_idx" ON "custom_trainer"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "custom_trainer_download_pkey" ON "custom_trainer_download"("id");

-- CreateIndex
CREATE UNIQUE INDEX "custom_trainer_like_pkey" ON "custom_trainer_like"("id");

-- CreateIndex
CREATE INDEX "email_log_user_id_idx" ON "email_log"("user_id");

-- CreateIndex
CREATE INDEX "forgot_password_user_id_idx" ON "forgot_password"("user_id");

-- CreateIndex
CREATE INDEX "friendship_user_id_idx" ON "friendship"("user_id");

-- CreateIndex
CREATE INDEX "friendship_request_from_id_idx" ON "friendship_request"("from_id");

-- CreateIndex
CREATE INDEX "friendship_request_to_id_idx" ON "friendship_request"("to_id");

-- CreateIndex
CREATE UNIQUE INDEX "game_session_pkey" ON "game_session"("id");

-- CreateIndex
CREATE INDEX "game_session_match_id_idx" ON "game_session"("match_id");

-- CreateIndex
CREATE INDEX "game_session_user_id_idx" ON "game_session"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "game_solve_pkey" ON "game_solve"("id");

-- CreateIndex
CREATE INDEX "game_solve_game_session_id_idx" ON "game_solve"("game_session_id");

-- CreateIndex
CREATE INDEX "game_solve_solve_id_idx" ON "game_solve"("solve_id");

-- CreateIndex
CREATE INDEX "game_solve_user_id_idx" ON "game_solve"("user_id");

-- CreateIndex
CREATE INDEX "image_user_id_idx" ON "image"("user_id");

-- CreateIndex
CREATE INDEX "integration_user_id_idx" ON "integration"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "match_link_code_key" ON "match"("link_code");

-- CreateIndex
CREATE UNIQUE INDEX "match_spectate_code_key" ON "match"("spectate_code");

-- CreateIndex
CREATE INDEX "match_link_code_idx" ON "match"("link_code");

-- CreateIndex
CREATE INDEX "match_match_session_id_idx" ON "match"("match_session_id");

-- CreateIndex
CREATE INDEX "match_spectate_code_idx" ON "match"("spectate_code");

-- CreateIndex
CREATE INDEX "match_winner_id_idx" ON "match"("winner_id");

-- CreateIndex
CREATE INDEX "match_participant_match_id_idx" ON "match_participant"("match_id");

-- CreateIndex
CREATE INDEX "match_participant_user_id_idx" ON "match_participant"("user_id");

-- CreateIndex
CREATE INDEX "match_session_created_by_id_idx" ON "match_session"("created_by_id");

-- CreateIndex
CREATE INDEX "notification_triggering_user_id_idx" ON "notification"("triggering_user_id");

-- CreateIndex
CREATE INDEX "notification_user_id_idx" ON "notification"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "notification_preference_user_id_key" ON "notification_preference"("user_id");

-- CreateIndex
CREATE INDEX "notification_preference_user_id_idx" ON "notification_preference"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "profile_user_id_key" ON "profile"("user_id");

-- CreateIndex
CREATE INDEX "profile_user_id_idx" ON "profile"("user_id");

-- CreateIndex
CREATE INDEX "profile_view_profile_id_idx" ON "profile_view"("profile_id");

-- CreateIndex
CREATE INDEX "profile_view_profile_user_id_idx" ON "profile_view"("profile_user_id");

-- CreateIndex
CREATE INDEX "profile_view_viewer_id_idx" ON "profile_view"("viewer_id");

-- CreateIndex
CREATE INDEX "session_user_id_idx" ON "session"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "setting_user_id_key" ON "setting"("user_id");

-- CreateIndex
CREATE INDEX "setting_user_id_idx" ON "setting"("user_id");

-- CreateIndex
CREATE INDEX "smart_device_user_id_idx" ON "smart_device"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "solve_share_code_key" ON "solve"("share_code");

-- CreateIndex
CREATE INDEX "solve_match_id_idx" ON "solve"("match_id");

-- CreateIndex
CREATE INDEX "solve_match_participant_id_idx" ON "solve"("match_participant_id");

-- CreateIndex
CREATE INDEX "solve_session_id_idx" ON "solve"("session_id");

-- CreateIndex
CREATE INDEX "solve_share_code_idx" ON "solve"("share_code");

-- CreateIndex
CREATE INDEX "solve_user_id_idx" ON "solve"("user_id");

-- CreateIndex
CREATE INDEX "solve_method_step_solve_id_idx" ON "solve_method_step"("solve_id");

-- CreateIndex
CREATE INDEX "solve_view_solve_id_idx" ON "solve_view"("solve_id");

-- CreateIndex
CREATE INDEX "solve_view_user_id_idx" ON "solve_view"("user_id");

-- CreateIndex
CREATE INDEX "solve_view_viewer_id_idx" ON "solve_view"("viewer_id");

-- CreateIndex
CREATE UNIQUE INDEX "timer_background_user_id_key" ON "timer_background"("user_id");

-- CreateIndex
CREATE INDEX "timer_background_user_id_idx" ON "timer_background"("user_id");

-- CreateIndex
CREATE INDEX "top_average_user_id_idx" ON "top_average"("user_id");

-- CreateIndex
CREATE INDEX "top_solve_solve_id_idx" ON "top_solve"("solve_id");

-- CreateIndex
CREATE INDEX "top_solve_user_id_idx" ON "top_solve"("user_id");

-- CreateIndex
CREATE INDEX "trainer_favorite_user_id_idx" ON "trainer_favorite"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_account_email_key" ON "user_account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_account_username_key" ON "user_account"("username");

-- AddForeignKey
ALTER TABLE "action_log" ADD CONSTRAINT "action_log_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "user_account"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "algorithm_override" ADD CONSTRAINT "algorithm_override_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "badge" ADD CONSTRAINT "badge_badge_type_id_fkey" FOREIGN KEY ("badge_type_id") REFERENCES "badge_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "badge" ADD CONSTRAINT "badge_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "badge_type" ADD CONSTRAINT "badge_type_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ban_log" ADD CONSTRAINT "ban_log_banned_user_id_fkey" FOREIGN KEY ("banned_user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ban_log" ADD CONSTRAINT "ban_log_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_message" ADD CONSTRAINT "chat_message_match_session_id_fkey" FOREIGN KEY ("match_session_id") REFERENCES "match_session"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_message" ADD CONSTRAINT "chat_message_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "custom_cube_type" ADD CONSTRAINT "custom_cube_type_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "custom_trainer" ADD CONSTRAINT "custom_trainer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "email_log" ADD CONSTRAINT "email_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forgot_password" ADD CONSTRAINT "forgot_password_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendship" ADD CONSTRAINT "friendship_friendship_request_id_fkey" FOREIGN KEY ("friendship_request_id") REFERENCES "friendship_request"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendship" ADD CONSTRAINT "friendship_other_user_id_fkey" FOREIGN KEY ("other_user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendship" ADD CONSTRAINT "friendship_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendship_request" ADD CONSTRAINT "friendship_request_from_id_fkey" FOREIGN KEY ("from_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendship_request" ADD CONSTRAINT "friendship_request_to_id_fkey" FOREIGN KEY ("to_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_session" ADD CONSTRAINT "game_session_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "match"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_session" ADD CONSTRAINT "game_session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_solve" ADD CONSTRAINT "game_solve_game_session_id_fkey" FOREIGN KEY ("game_session_id") REFERENCES "game_session"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "game_solve" ADD CONSTRAINT "game_solve_solve_id_fkey" FOREIGN KEY ("solve_id") REFERENCES "solve"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "game_solve" ADD CONSTRAINT "game_solve_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integration" ADD CONSTRAINT "integration_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match" ADD CONSTRAINT "match_match_session_id_fkey" FOREIGN KEY ("match_session_id") REFERENCES "match_session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match" ADD CONSTRAINT "match_winner_id_fkey" FOREIGN KEY ("winner_id") REFERENCES "user_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_participant" ADD CONSTRAINT "match_participant_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_participant" ADD CONSTRAINT "match_participant_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_session" ADD CONSTRAINT "match_session_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_triggering_user_id_fkey" FOREIGN KEY ("triggering_user_id") REFERENCES "user_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_preference" ADD CONSTRAINT "notification_preference_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_header_image_id_fkey" FOREIGN KEY ("header_image_id") REFERENCES "image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_pfp_image_id_fkey" FOREIGN KEY ("pfp_image_id") REFERENCES "image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_view" ADD CONSTRAINT "profile_view_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_view" ADD CONSTRAINT "profile_view_profile_user_id_fkey" FOREIGN KEY ("profile_user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_view" ADD CONSTRAINT "profile_view_viewer_id_fkey" FOREIGN KEY ("viewer_id") REFERENCES "user_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_report_for_user_id_fkey" FOREIGN KEY ("report_for_user_id") REFERENCES "user_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setting" ADD CONSTRAINT "setting_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "smart_device" ADD CONSTRAINT "smart_device_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve" ADD CONSTRAINT "solve_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "match"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve" ADD CONSTRAINT "solve_match_participant_id_fkey" FOREIGN KEY ("match_participant_id") REFERENCES "match_participant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve" ADD CONSTRAINT "solve_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "session"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve" ADD CONSTRAINT "solve_smart_device_id_fkey" FOREIGN KEY ("smart_device_id") REFERENCES "smart_device"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve" ADD CONSTRAINT "solve_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve_method_step" ADD CONSTRAINT "solve_method_step_solve_id_fkey" FOREIGN KEY ("solve_id") REFERENCES "solve"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve_view" ADD CONSTRAINT "solve_view_solve_id_fkey" FOREIGN KEY ("solve_id") REFERENCES "solve"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve_view" ADD CONSTRAINT "solve_view_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solve_view" ADD CONSTRAINT "solve_view_viewer_id_fkey" FOREIGN KEY ("viewer_id") REFERENCES "user_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timer_background" ADD CONSTRAINT "timer_background_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_average" ADD CONSTRAINT "top_average_solve_1_id_fkey" FOREIGN KEY ("solve_1_id") REFERENCES "solve"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_average" ADD CONSTRAINT "top_average_solve_2_id_fkey" FOREIGN KEY ("solve_2_id") REFERENCES "solve"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_average" ADD CONSTRAINT "top_average_solve_3_id_fkey" FOREIGN KEY ("solve_3_id") REFERENCES "solve"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_average" ADD CONSTRAINT "top_average_solve_4_id_fkey" FOREIGN KEY ("solve_4_id") REFERENCES "solve"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_average" ADD CONSTRAINT "top_average_solve_5_id_fkey" FOREIGN KEY ("solve_5_id") REFERENCES "solve"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_average" ADD CONSTRAINT "top_average_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_solve" ADD CONSTRAINT "top_solve_solve_id_fkey" FOREIGN KEY ("solve_id") REFERENCES "solve"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_solve" ADD CONSTRAINT "top_solve_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainer_favorite" ADD CONSTRAINT "trainer_favorite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
