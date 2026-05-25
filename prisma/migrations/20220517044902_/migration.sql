-- CreateTable
CREATE TABLE "match_lobby" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "cube_type" TEXT NOT NULL,
    "game_type" "GameType" NOT NULL,
    "player_count" INTEGER NOT NULL,
    "elo" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "match_lobby_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "match_lobby_user_id_idx" ON "match_lobby"("user_id");

-- CreateIndex
CREATE INDEX "match_lobby_game_type_idx" ON "match_lobby"("game_type");

-- AddForeignKey
ALTER TABLE "match_lobby" ADD CONSTRAINT "match_lobby_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;
