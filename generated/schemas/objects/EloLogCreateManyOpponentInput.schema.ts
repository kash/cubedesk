import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  cube_type: z.string(),
  elo_change: z.number().int().optional(),
  updated_at: z.coerce.date().optional(),
  created_at: z.coerce.date().optional(),
  match_id: z.string().optional().nullable(),
  player_id: z.string(),
  opponent_new_elo_rating: z.number().int(),
  opponent_new_game_count: z.number().int().optional().nullable(),
  player_new_elo_rating: z.number().int(),
  player_new_game_count: z.number().int(),
  refunded_at: z.coerce.date().optional().nullable()
}).strict();
export const EloLogCreateManyOpponentInputObjectSchema: z.ZodType<Prisma.EloLogCreateManyOpponentInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogCreateManyOpponentInput>;
export const EloLogCreateManyOpponentInputObjectZodSchema = makeSchema();
