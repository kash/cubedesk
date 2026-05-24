import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  solve_count: z.literal(true).optional(),
  total_time: z.literal(true).optional()
}).strict();
export const GameSessionAvgAggregateInputObjectSchema: z.ZodType<Prisma.GameSessionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionAvgAggregateInputType>;
export const GameSessionAvgAggregateInputObjectZodSchema = makeSchema();
