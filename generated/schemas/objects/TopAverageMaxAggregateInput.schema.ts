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
  created_at: z.literal(true).optional()
}).strict();
export const TopAverageMaxAggregateInputObjectSchema: z.ZodType<Prisma.TopAverageMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageMaxAggregateInputType>;
export const TopAverageMaxAggregateInputObjectZodSchema = makeSchema();
