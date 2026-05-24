import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogWhereInputObjectSchema as MetricLogWhereInputObjectSchema } from './MetricLogWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MetricLogWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountMetricLogsArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountMetricLogsArgsObjectZodSchema = makeSchema();
