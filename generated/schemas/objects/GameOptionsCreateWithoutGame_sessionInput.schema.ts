import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema';
import { MatchSessionCreateNestedOneWithoutGame_optionsInputObjectSchema as MatchSessionCreateNestedOneWithoutGame_optionsInputObjectSchema } from './MatchSessionCreateNestedOneWithoutGame_optionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  game_type: GameTypeSchema,
  cube_type: z.string().optional(),
  elimination_starting_time_seconds: z.number().int().optional(),
  elimination_percent_change_rate: z.number().int().optional(),
  head_to_head_target_win_count: z.number().int().optional(),
  gauntlet_time_multiplier: z.number().optional(),
  created_at: z.coerce.date().optional(),
  match_session: z.lazy(() => MatchSessionCreateNestedOneWithoutGame_optionsInputObjectSchema).optional()
}).strict();
export const GameOptionsCreateWithoutGame_sessionInputObjectSchema: z.ZodType<Prisma.GameOptionsCreateWithoutGame_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsCreateWithoutGame_sessionInput>;
export const GameOptionsCreateWithoutGame_sessionInputObjectZodSchema = makeSchema();
