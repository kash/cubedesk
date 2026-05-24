import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionArgsObjectSchema as GameSessionArgsObjectSchema } from './GameSessionArgs.schema';
import { MatchSessionArgsObjectSchema as MatchSessionArgsObjectSchema } from './MatchSessionArgs.schema'

const makeSchema = () => z.object({
  game_session: z.union([z.boolean(), z.lazy(() => GameSessionArgsObjectSchema)]).optional(),
  match_session: z.union([z.boolean(), z.lazy(() => MatchSessionArgsObjectSchema)]).optional()
}).strict();
export const GameOptionsIncludeObjectSchema: z.ZodType<Prisma.GameOptionsInclude> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsInclude>;
export const GameOptionsIncludeObjectZodSchema = makeSchema();
