import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionArgsObjectSchema as MatchSessionArgsObjectSchema } from './MatchSessionArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  match_session_id: z.boolean().optional(),
  message: z.boolean().optional(),
  created_at: z.boolean().optional(),
  bad_words: z.boolean().optional(),
  raw_message: z.boolean().optional(),
  match_session: z.union([z.boolean(), z.lazy(() => MatchSessionArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const ChatMessageSelectObjectSchema: z.ZodType<Prisma.ChatMessageSelect> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageSelect>;
export const ChatMessageSelectObjectZodSchema = makeSchema();
