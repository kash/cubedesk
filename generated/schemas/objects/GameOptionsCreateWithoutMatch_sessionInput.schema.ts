import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema';
import { GameSessionCreateNestedOneWithoutGame_optionsInputObjectSchema as GameSessionCreateNestedOneWithoutGame_optionsInputObjectSchema } from './GameSessionCreateNestedOneWithoutGame_optionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  game_type: GameTypeSchema,
  cube_type: z.string().optional(),
  elimination_starting_time_seconds: z.number().int().optional(),
  elimination_percent_change_rate: z.number().int().optional(),
  head_to_head_target_win_count: z.number().int().optional(),
  gauntlet_time_multiplier: z.number().optional(),
  created_at: z.coerce.date().optional(),
  game_session: z.lazy(() => GameSessionCreateNestedOneWithoutGame_optionsInputObjectSchema).optional()
}).strict();
export const GameOptionsCreateWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.GameOptionsCreateWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsCreateWithoutMatch_sessionInput>;
export const GameOptionsCreateWithoutMatch_sessionInputObjectZodSchema = makeSchema();
