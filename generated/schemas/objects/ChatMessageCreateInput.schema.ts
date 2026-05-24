import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionCreateNestedOneWithoutChat_messagesInputObjectSchema as MatchSessionCreateNestedOneWithoutChat_messagesInputObjectSchema } from './MatchSessionCreateNestedOneWithoutChat_messagesInput.schema';
import { UserAccountCreateNestedOneWithoutChat_messagesInputObjectSchema as UserAccountCreateNestedOneWithoutChat_messagesInputObjectSchema } from './UserAccountCreateNestedOneWithoutChat_messagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  message: z.string(),
  created_at: z.coerce.date().optional(),
  bad_words: z.boolean().optional(),
  raw_message: z.string().optional().nullable(),
  match_session: z.lazy(() => MatchSessionCreateNestedOneWithoutChat_messagesInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutChat_messagesInputObjectSchema)
}).strict();
export const ChatMessageCreateInputObjectSchema: z.ZodType<Prisma.ChatMessageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageCreateInput>;
export const ChatMessageCreateInputObjectZodSchema = makeSchema();
