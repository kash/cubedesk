import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  solve_count: z.literal(true).optional(),
  total_time: z.literal(true).optional()
}).strict();
export const GameSessionSumAggregateInputObjectSchema: z.ZodType<Prisma.GameSessionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionSumAggregateInputType>;
export const GameSessionSumAggregateInputObjectZodSchema = makeSchema();
