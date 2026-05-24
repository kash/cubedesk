import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  time: z.literal(true).optional(),
  solve_id: z.literal(true).optional(),
  cube_type: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const TopSolveMinAggregateInputObjectSchema: z.ZodType<Prisma.TopSolveMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveMinAggregateInputType>;
export const TopSolveMinAggregateInputObjectZodSchema = makeSchema();
