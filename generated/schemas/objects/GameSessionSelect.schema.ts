import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsArgsObjectSchema as GameOptionsArgsObjectSchema } from './GameOptionsArgs.schema';
import { MatchArgsObjectSchema as MatchArgsObjectSchema } from './MatchArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { SolveFindManySchema as SolveFindManySchema } from '../findManySolve.schema';
import { GameSessionCountOutputTypeArgsObjectSchema as GameSessionCountOutputTypeArgsObjectSchema } from './GameSessionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  match_id: z.boolean().optional(),
  game_type: z.boolean().optional(),
  solve_count: z.boolean().optional(),
  total_time: z.boolean().optional(),
  created_at: z.boolean().optional(),
  game_options: z.union([z.boolean(), z.lazy(() => GameOptionsArgsObjectSchema)]).optional(),
  match: z.union([z.boolean(), z.lazy(() => MatchArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  solves: z.union([z.boolean(), z.lazy(() => SolveFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GameSessionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const GameSessionSelectObjectSchema: z.ZodType<Prisma.GameSessionSelect> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionSelect>;
export const GameSessionSelectObjectZodSchema = makeSchema();
