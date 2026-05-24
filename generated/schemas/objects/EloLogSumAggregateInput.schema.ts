import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  elo_change: z.literal(true).optional(),
  opponent_new_elo_rating: z.literal(true).optional(),
  opponent_new_game_count: z.literal(true).optional(),
  player_new_elo_rating: z.literal(true).optional(),
  player_new_game_count: z.literal(true).optional()
}).strict();
export const EloLogSumAggregateInputObjectSchema: z.ZodType<Prisma.EloLogSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EloLogSumAggregateInputType>;
export const EloLogSumAggregateInputObjectZodSchema = makeSchema();
