import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_email: z.literal(true).optional(),
  metric_type: z.literal(true).optional(),
  metric_value: z.literal(true).optional(),
  metric_details: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const MetricLogMinAggregateInputObjectSchema: z.ZodType<Prisma.MetricLogMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogMinAggregateInputType>;
export const MetricLogMinAggregateInputObjectZodSchema = makeSchema();
