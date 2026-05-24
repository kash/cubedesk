import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageFindManySchema as ChatMessageFindManySchema } from '../findManyChatMessage.schema';
import { GameOptionsArgsObjectSchema as GameOptionsArgsObjectSchema } from './GameOptionsArgs.schema';
import { MatchFindManySchema as MatchFindManySchema } from '../findManyMatch.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { MatchSessionCountOutputTypeArgsObjectSchema as MatchSessionCountOutputTypeArgsObjectSchema } from './MatchSessionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  chat_messages: z.union([z.boolean(), z.lazy(() => ChatMessageFindManySchema)]).optional(),
  game_options: z.union([z.boolean(), z.lazy(() => GameOptionsArgsObjectSchema)]).optional(),
  matches: z.union([z.boolean(), z.lazy(() => MatchFindManySchema)]).optional(),
  created_by: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MatchSessionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MatchSessionIncludeObjectSchema: z.ZodType<Prisma.MatchSessionInclude> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionInclude>;
export const MatchSessionIncludeObjectZodSchema = makeSchema();
