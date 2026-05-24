import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MatchSessionOrderByWithRelationInputObjectSchema as MatchSessionOrderByWithRelationInputObjectSchema } from './MatchSessionOrderByWithRelationInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { ChatMessageOrderByRelevanceInputObjectSchema as ChatMessageOrderByRelevanceInputObjectSchema } from './ChatMessageOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  match_session_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  message: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  bad_words: SortOrderSchema.optional(),
  raw_message: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  match_session: z.lazy(() => MatchSessionOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => ChatMessageOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const ChatMessageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ChatMessageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageOrderByWithRelationInput>;
export const ChatMessageOrderByWithRelationInputObjectZodSchema = makeSchema();
