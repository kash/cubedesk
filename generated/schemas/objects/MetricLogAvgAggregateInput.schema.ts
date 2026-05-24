import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  metric_value: z.literal(true).optional()
}).strict();
export const MetricLogAvgAggregateInputObjectSchema: z.ZodType<Prisma.MetricLogAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogAvgAggregateInputType>;
export const MetricLogAvgAggregateInputObjectZodSchema = makeSchema();
