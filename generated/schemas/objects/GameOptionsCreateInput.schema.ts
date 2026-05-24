import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema';
import { GameSessionCreateNestedOneWithoutGame_optionsInputObjectSchema as GameSessionCreateNestedOneWithoutGame_optionsInputObjectSchema } from './GameSessionCreateNestedOneWithoutGame_optionsInput.schema';
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
  game_session: z.lazy(() => GameSessionCreateNestedOneWithoutGame_optionsInputObjectSchema).optional(),
  match_session: z.lazy(() => MatchSessionCreateNestedOneWithoutGame_optionsInputObjectSchema).optional()
}).strict();
export const GameOptionsCreateInputObjectSchema: z.ZodType<Prisma.GameOptionsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsCreateInput>;
export const GameOptionsCreateInputObjectZodSchema = makeSchema();
