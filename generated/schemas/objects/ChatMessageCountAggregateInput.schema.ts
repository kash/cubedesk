import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  match_session_id: z.literal(true).optional(),
  message: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  bad_words: z.literal(true).optional(),
  raw_message: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ChatMessageCountAggregateInputObjectSchema: z.ZodType<Prisma.ChatMessageCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageCountAggregateInputType>;
export const ChatMessageCountAggregateInputObjectZodSchema = makeSchema();
