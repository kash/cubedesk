import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  opponent_id: z.literal(true).optional(),
  cube_type: z.literal(true).optional(),
  elo_change: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  match_id: z.literal(true).optional(),
  player_id: z.literal(true).optional(),
  opponent_new_elo_rating: z.literal(true).optional(),
  opponent_new_game_count: z.literal(true).optional(),
  player_new_elo_rating: z.literal(true).optional(),
  player_new_game_count: z.literal(true).optional(),
  refunded_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const EloLogCountAggregateInputObjectSchema: z.ZodType<Prisma.EloLogCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EloLogCountAggregateInputType>;
export const EloLogCountAggregateInputObjectZodSchema = makeSchema();
