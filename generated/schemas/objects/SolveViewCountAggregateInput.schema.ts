import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  solve_id: z.literal(true).optional(),
  viewer_id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SolveViewCountAggregateInputObjectSchema: z.ZodType<Prisma.SolveViewCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCountAggregateInputType>;
export const SolveViewCountAggregateInputObjectZodSchema = makeSchema();
