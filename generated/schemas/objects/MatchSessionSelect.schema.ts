import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageFindManySchema as ChatMessageFindManySchema } from '../findManyChatMessage.schema';
import { GameOptionsArgsObjectSchema as GameOptionsArgsObjectSchema } from './GameOptionsArgs.schema';
import { MatchFindManySchema as MatchFindManySchema } from '../findManyMatch.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { MatchSessionCountOutputTypeArgsObjectSchema as MatchSessionCountOutputTypeArgsObjectSchema } from './MatchSessionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  min_players: z.boolean().optional(),
  max_players: z.boolean().optional(),
  match_type: z.boolean().optional(),
  custom_match: z.boolean().optional(),
  created_at: z.boolean().optional(),
  created_by_id: z.boolean().optional(),
  rated: z.boolean().optional(),
  chat_messages: z.union([z.boolean(), z.lazy(() => ChatMessageFindManySchema)]).optional(),
  game_options: z.union([z.boolean(), z.lazy(() => GameOptionsArgsObjectSchema)]).optional(),
  matches: z.union([z.boolean(), z.lazy(() => MatchFindManySchema)]).optional(),
  created_by: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MatchSessionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MatchSessionSelectObjectSchema: z.ZodType<Prisma.MatchSessionSelect> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionSelect>;
export const MatchSessionSelectObjectZodSchema = makeSchema();
