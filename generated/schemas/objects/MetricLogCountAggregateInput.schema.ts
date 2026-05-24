import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_email: z.literal(true).optional(),
  metric_type: z.literal(true).optional(),
  metric_value: z.literal(true).optional(),
  metric_details: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MetricLogCountAggregateInputObjectSchema: z.ZodType<Prisma.MetricLogCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogCountAggregateInputType>;
export const MetricLogCountAggregateInputObjectZodSchema = makeSchema();
