import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  match_id: z.literal(true).optional(),
  game_type: z.literal(true).optional(),
  solve_count: z.literal(true).optional(),
  total_time: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const GameSessionMinAggregateInputObjectSchema: z.ZodType<Prisma.GameSessionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionMinAggregateInputType>;
export const GameSessionMinAggregateInputObjectZodSchema = makeSchema();
