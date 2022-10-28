-- CreateEnum
CREATE TYPE "MetricLogType" AS ENUM ('DELETE_USER_ACCOUNT');

-- CreateTable
CREATE TABLE "metric_log" (
    "id" TEXT NOT NULL,
    "user_email" TEXT,
    "metric_type" "MetricLogType" NOT NULL,
    "metric_value" DOUBLE PRECISION,
    "metric_details" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "metric_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "metric_log_metric_type_idx" ON "metric_log"("metric_type");

-- CreateIndex
CREATE INDEX "metric_log_user_email_idx" ON "metric_log"("user_email");

-- AddForeignKey
ALTER TABLE "metric_log" ADD CONSTRAINT "metric_log_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "user_account"("email") ON DELETE SET DEFAULT ON UPDATE CASCADE;
