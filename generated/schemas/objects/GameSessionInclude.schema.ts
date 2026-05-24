import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsArgsObjectSchema as GameOptionsArgsObjectSchema } from './GameOptionsArgs.schema';
import { MatchArgsObjectSchema as MatchArgsObjectSchema } from './MatchArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { SolveFindManySchema as SolveFindManySchema } from '../findManySolve.schema';
import { GameSessionCountOutputTypeArgsObjectSchema as GameSessionCountOutputTypeArgsObjectSchema } from './GameSessionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  game_options: z.union([z.boolean(), z.lazy(() => GameOptionsArgsObjectSchema)]).optional(),
  match: z.union([z.boolean(), z.lazy(() => MatchArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  solves: z.union([z.boolean(), z.lazy(() => SolveFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GameSessionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const GameSessionIncludeObjectSchema: z.ZodType<Prisma.GameSessionInclude> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionInclude>;
export const GameSessionIncludeObjectZodSchema = makeSchema();
