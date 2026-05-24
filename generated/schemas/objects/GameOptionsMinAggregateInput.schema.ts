import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  game_session_id: z.literal(true).optional(),
  match_session_id: z.literal(true).optional(),
  game_type: z.literal(true).optional(),
  cube_type: z.literal(true).optional(),
  elimination_starting_time_seconds: z.literal(true).optional(),
  elimination_percent_change_rate: z.literal(true).optional(),
  head_to_head_target_win_count: z.literal(true).optional(),
  gauntlet_time_multiplier: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const GameOptionsMinAggregateInputObjectSchema: z.ZodType<Prisma.GameOptionsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsMinAggregateInputType>;
export const GameOptionsMinAggregateInputObjectZodSchema = makeSchema();
