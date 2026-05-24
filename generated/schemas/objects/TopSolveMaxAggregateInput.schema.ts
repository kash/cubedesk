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
export const TopSolveMaxAggregateInputObjectSchema: z.ZodType<Prisma.TopSolveMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveMaxAggregateInputType>;
export const TopSolveMaxAggregateInputObjectZodSchema = makeSchema();
