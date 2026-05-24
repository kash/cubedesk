import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  match_session_id: z.string().optional().nullable(),
  message: z.string(),
  created_at: z.coerce.date().optional(),
  bad_words: z.boolean().optional(),
  raw_message: z.string().optional().nullable()
}).strict();
export const ChatMessageUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ChatMessageUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageUncheckedCreateWithoutUserInput>;
export const ChatMessageUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
