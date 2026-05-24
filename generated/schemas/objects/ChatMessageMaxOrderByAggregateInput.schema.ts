import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  match_session_id: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  bad_words: SortOrderSchema.optional(),
  raw_message: SortOrderSchema.optional()
}).strict();
export const ChatMessageMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ChatMessageMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageMaxOrderByAggregateInput>;
export const ChatMessageMaxOrderByAggregateInputObjectZodSchema = makeSchema();
