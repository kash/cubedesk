import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionCreateNestedOneWithoutChat_messagesInputObjectSchema as MatchSessionCreateNestedOneWithoutChat_messagesInputObjectSchema } from './MatchSessionCreateNestedOneWithoutChat_messagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  message: z.string(),
  created_at: z.coerce.date().optional(),
  bad_words: z.boolean().optional(),
  raw_message: z.string().optional().nullable(),
  match_session: z.lazy(() => MatchSessionCreateNestedOneWithoutChat_messagesInputObjectSchema).optional()
}).strict();
export const ChatMessageCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ChatMessageCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageCreateWithoutUserInput>;
export const ChatMessageCreateWithoutUserInputObjectZodSchema = makeSchema();
