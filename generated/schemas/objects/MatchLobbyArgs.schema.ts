import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchLobbySelectObjectSchema as MatchLobbySelectObjectSchema } from './MatchLobbySelect.schema';
import { MatchLobbyIncludeObjectSchema as MatchLobbyIncludeObjectSchema } from './MatchLobbyInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MatchLobbySelectObjectSchema).optional(),
  include: z.lazy(() => MatchLobbyIncludeObjectSchema).optional()
}).strict();
export const MatchLobbyArgsObjectSchema = makeSchema();
export const MatchLobbyArgsObjectZodSchema = makeSchema();
