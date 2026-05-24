import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  message: z.string(),
  created_at: z.coerce.date().optional(),
  bad_words: z.boolean().optional(),
  raw_message: z.string().optional().nullable()
}).strict();
export const ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.ChatMessageUncheckedCreateWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageUncheckedCreateWithoutMatch_sessionInput>;
export const ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectZodSchema = makeSchema();
