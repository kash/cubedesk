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
export const ChatMessageCreateManyMatch_sessionInputObjectSchema: z.ZodType<Prisma.ChatMessageCreateManyMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageCreateManyMatch_sessionInput>;
export const ChatMessageCreateManyMatch_sessionInputObjectZodSchema = makeSchema();
