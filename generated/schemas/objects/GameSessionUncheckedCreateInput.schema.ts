import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema';
import { GameOptionsUncheckedCreateNestedOneWithoutGame_sessionInputObjectSchema as GameOptionsUncheckedCreateNestedOneWithoutGame_sessionInputObjectSchema } from './GameOptionsUncheckedCreateNestedOneWithoutGame_sessionInput.schema';
import { SolveUncheckedCreateNestedManyWithoutGame_sessionInputObjectSchema as SolveUncheckedCreateNestedManyWithoutGame_sessionInputObjectSchema } from './SolveUncheckedCreateNestedManyWithoutGame_sessionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  match_id: z.string().optional().nullable(),
  game_type: GameTypeSchema,
  solve_count: z.number().int().optional(),
  total_time: z.number().optional(),
  created_at: z.coerce.date().optional(),
  game_options: z.lazy(() => GameOptionsUncheckedCreateNestedOneWithoutGame_sessionInputObjectSchema).optional(),
  solves: z.lazy(() => SolveUncheckedCreateNestedManyWithoutGame_sessionInputObjectSchema).optional()
}).strict();
export const GameSessionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.GameSessionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUncheckedCreateInput>;
export const GameSessionUncheckedCreateInputObjectZodSchema = makeSchema();
