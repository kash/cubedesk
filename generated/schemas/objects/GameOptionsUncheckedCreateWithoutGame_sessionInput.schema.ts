import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  match_session_id: z.string().optional().nullable(),
  game_type: GameTypeSchema,
  cube_type: z.string().optional(),
  elimination_starting_time_seconds: z.number().int().optional(),
  elimination_percent_change_rate: z.number().int().optional(),
  head_to_head_target_win_count: z.number().int().optional(),
  gauntlet_time_multiplier: z.number().optional(),
  created_at: z.coerce.date().optional()
}).strict();
export const GameOptionsUncheckedCreateWithoutGame_sessionInputObjectSchema: z.ZodType<Prisma.GameOptionsUncheckedCreateWithoutGame_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsUncheckedCreateWithoutGame_sessionInput>;
export const GameOptionsUncheckedCreateWithoutGame_sessionInputObjectZodSchema = makeSchema();
