import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  time: z.literal(true).optional(),
  cube_type: z.literal(true).optional(),
  solve_1_id: z.literal(true).optional(),
  solve_2_id: z.literal(true).optional(),
  solve_3_id: z.literal(true).optional(),
  solve_4_id: z.literal(true).optional(),
  solve_5_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TopAverageCountAggregateInputObjectSchema: z.ZodType<Prisma.TopAverageCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCountAggregateInputType>;
export const TopAverageCountAggregateInputObjectZodSchema = makeSchema();
