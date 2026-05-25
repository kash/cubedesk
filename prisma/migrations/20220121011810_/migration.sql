-- CreateTable
CREATE TABLE "user_feature_state" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "received_welcome_screen" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_feature_state_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "elo_rating" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "elo_222_rating" INTEGER NOT NULL DEFAULT 1000,
    "elo_333_rating" INTEGER NOT NULL DEFAULT 1000,
    "elo_444_rating" INTEGER NOT NULL DEFAULT 1000,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "elo_rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_feature_state_user_id_key" ON "user_feature_state"("user_id");

-- CreateIndex
CREATE INDEX "user_feature_state_user_id_idx" ON "user_feature_state"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "elo_rating_user_id_key" ON "elo_rating"("user_id");

-- CreateIndex
CREATE INDEX "elo_rating_user_id_idx" ON "elo_rating"("user_id");

-- AddForeignKey
ALTER TABLE "user_feature_state" ADD CONSTRAINT "user_feature_state_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elo_rating" ADD CONSTRAINT "elo_rating_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
