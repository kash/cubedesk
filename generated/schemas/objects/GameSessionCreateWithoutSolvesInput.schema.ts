import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema';
import { GameOptionsCreateNestedOneWithoutGame_sessionInputObjectSchema as GameOptionsCreateNestedOneWithoutGame_sessionInputObjectSchema } from './GameOptionsCreateNestedOneWithoutGame_sessionInput.schema';
import { MatchCreateNestedOneWithoutGame_sessionInputObjectSchema as MatchCreateNestedOneWithoutGame_sessionInputObjectSchema } from './MatchCreateNestedOneWithoutGame_sessionInput.schema';
import { UserAccountCreateNestedOneWithoutGame_sessionsInputObjectSchema as UserAccountCreateNestedOneWithoutGame_sessionsInputObjectSchema } from './UserAccountCreateNestedOneWithoutGame_sessionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  game_type: GameTypeSchema,
  solve_count: z.number().int().optional(),
  total_time: z.number().optional(),
  created_at: z.coerce.date().optional(),
  game_options: z.lazy(() => GameOptionsCreateNestedOneWithoutGame_sessionInputObjectSchema).optional(),
  match: z.lazy(() => MatchCreateNestedOneWithoutGame_sessionInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutGame_sessionsInputObjectSchema)
}).strict();
export const GameSessionCreateWithoutSolvesInputObjectSchema: z.ZodType<Prisma.GameSessionCreateWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionCreateWithoutSolvesInput>;
export const GameSessionCreateWithoutSolvesInputObjectZodSchema = makeSchema();
