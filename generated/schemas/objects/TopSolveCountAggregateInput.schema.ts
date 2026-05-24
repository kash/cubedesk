import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  time: z.literal(true).optional(),
  solve_id: z.literal(true).optional(),
  cube_type: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TopSolveCountAggregateInputObjectSchema: z.ZodType<Prisma.TopSolveCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveCountAggregateInputType>;
export const TopSolveCountAggregateInputObjectZodSchema = makeSchema();
