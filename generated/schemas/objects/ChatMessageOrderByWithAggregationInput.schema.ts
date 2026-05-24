import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ChatMessageCountOrderByAggregateInputObjectSchema as ChatMessageCountOrderByAggregateInputObjectSchema } from './ChatMessageCountOrderByAggregateInput.schema';
import { ChatMessageMaxOrderByAggregateInputObjectSchema as ChatMessageMaxOrderByAggregateInputObjectSchema } from './ChatMessageMaxOrderByAggregateInput.schema';
import { ChatMessageMinOrderByAggregateInputObjectSchema as ChatMessageMinOrderByAggregateInputObjectSchema } from './ChatMessageMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  match_session_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  message: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  bad_words: SortOrderSchema.optional(),
  raw_message: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ChatMessageCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ChatMessageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ChatMessageMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ChatMessageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ChatMessageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageOrderByWithAggregationInput>;
export const ChatMessageOrderByWithAggregationInputObjectZodSchema = makeSchema();
