import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema';
import { MatchCreateNestedOneWithoutGame_sessionInputObjectSchema as MatchCreateNestedOneWithoutGame_sessionInputObjectSchema } from './MatchCreateNestedOneWithoutGame_sessionInput.schema';
import { UserAccountCreateNestedOneWithoutGame_sessionsInputObjectSchema as UserAccountCreateNestedOneWithoutGame_sessionsInputObjectSchema } from './UserAccountCreateNestedOneWithoutGame_sessionsInput.schema';
import { SolveCreateNestedManyWithoutGame_sessionInputObjectSchema as SolveCreateNestedManyWithoutGame_sessionInputObjectSchema } from './SolveCreateNestedManyWithoutGame_sessionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  game_type: GameTypeSchema,
  solve_count: z.number().int().optional(),
  total_time: z.number().optional(),
  created_at: z.coerce.date().optional(),
  match: z.lazy(() => MatchCreateNestedOneWithoutGame_sessionInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutGame_sessionsInputObjectSchema),
  solves: z.lazy(() => SolveCreateNestedManyWithoutGame_sessionInputObjectSchema).optional()
}).strict();
export const GameSessionCreateWithoutGame_optionsInputObjectSchema: z.ZodType<Prisma.GameSessionCreateWithoutGame_optionsInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionCreateWithoutGame_optionsInput>;
export const GameSessionCreateWithoutGame_optionsInputObjectZodSchema = makeSchema();
