import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  time: z.literal(true).optional(),
  raw_time: z.literal(true).optional(),
  started_at: z.literal(true).optional(),
  ended_at: z.literal(true).optional(),
  inspection_time: z.literal(true).optional(),
  smart_put_down_time: z.literal(true).optional(),
  smart_turn_count: z.literal(true).optional()
}).strict();
export const SolveSumAggregateInputObjectSchema: z.ZodType<Prisma.SolveSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SolveSumAggregateInputType>;
export const SolveSumAggregateInputObjectZodSchema = makeSchema();
