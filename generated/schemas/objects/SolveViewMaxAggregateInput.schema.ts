import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  solve_id: z.literal(true).optional(),
  viewer_id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const SolveViewMaxAggregateInputObjectSchema: z.ZodType<Prisma.SolveViewMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewMaxAggregateInputType>;
export const SolveViewMaxAggregateInputObjectZodSchema = makeSchema();
