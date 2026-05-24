import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  metric_value: z.literal(true).optional()
}).strict();
export const MetricLogSumAggregateInputObjectSchema: z.ZodType<Prisma.MetricLogSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogSumAggregateInputType>;
export const MetricLogSumAggregateInputObjectZodSchema = makeSchema();
