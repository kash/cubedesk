import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema';
import { SolveUncheckedCreateNestedManyWithoutGame_sessionInputObjectSchema as SolveUncheckedCreateNestedManyWithoutGame_sessionInputObjectSchema } from './SolveUncheckedCreateNestedManyWithoutGame_sessionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  match_id: z.string().optional().nullable(),
  game_type: GameTypeSchema,
  solve_count: z.number().int().optional(),
  total_time: z.number().optional(),
  created_at: z.coerce.date().optional(),
  solves: z.lazy(() => SolveUncheckedCreateNestedManyWithoutGame_sessionInputObjectSchema).optional()
}).strict();
export const GameSessionUncheckedCreateWithoutGame_optionsInputObjectSchema: z.ZodType<Prisma.GameSessionUncheckedCreateWithoutGame_optionsInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUncheckedCreateWithoutGame_optionsInput>;
export const GameSessionUncheckedCreateWithoutGame_optionsInputObjectZodSchema = makeSchema();
