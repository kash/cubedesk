-- CreateTable
CREATE TABLE "trainer_algorithm" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "solution" TEXT NOT NULL DEFAULT '',
    "scrambles" TEXT NOT NULL DEFAULT '',
    "cube_type" TEXT NOT NULL,
    "algo_type" TEXT NOT NULL,
    "group_name" TEXT NOT NULL DEFAULT '',
    "img_link" TEXT NOT NULL DEFAULT '',
    "colors" TEXT NOT NULL DEFAULT '',
    "rotate" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trainer_algorithm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trainer_catalog_state" (
    "id" TEXT NOT NULL,
    "initialized_at" TIMESTAMP(3),
    "revision" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "trainer_catalog_state_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "trainer_algorithm_active_cube_type_algo_type_idx" ON "trainer_algorithm"("active", "cube_type", "algo_type");
