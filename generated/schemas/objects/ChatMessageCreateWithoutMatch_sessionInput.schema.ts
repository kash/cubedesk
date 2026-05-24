import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutChat_messagesInputObjectSchema as UserAccountCreateNestedOneWithoutChat_messagesInputObjectSchema } from './UserAccountCreateNestedOneWithoutChat_messagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  message: z.string(),
  created_at: z.coerce.date().optional(),
  bad_words: z.boolean().optional(),
  raw_message: z.string().optional().nullable(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutChat_messagesInputObjectSchema)
}).strict();
export const ChatMessageCreateWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.ChatMessageCreateWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageCreateWithoutMatch_sessionInput>;
export const ChatMessageCreateWithoutMatch_sessionInputObjectZodSchema = makeSchema();
