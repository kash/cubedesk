import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionArgsObjectSchema as MatchSessionArgsObjectSchema } from './MatchSessionArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  match_session: z.union([z.boolean(), z.lazy(() => MatchSessionArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const ChatMessageIncludeObjectSchema: z.ZodType<Prisma.ChatMessageInclude> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageInclude>;
export const ChatMessageIncludeObjectZodSchema = makeSchema();
