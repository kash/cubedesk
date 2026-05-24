import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  elo_change: z.literal(true).optional(),
  opponent_new_elo_rating: z.literal(true).optional(),
  opponent_new_game_count: z.literal(true).optional(),
  player_new_elo_rating: z.literal(true).optional(),
  player_new_game_count: z.literal(true).optional()
}).strict();
export const EloLogAvgAggregateInputObjectSchema: z.ZodType<Prisma.EloLogAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EloLogAvgAggregateInputType>;
export const EloLogAvgAggregateInputObjectZodSchema = makeSchema();
