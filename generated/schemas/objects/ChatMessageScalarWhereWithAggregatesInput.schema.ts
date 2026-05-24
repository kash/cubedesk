import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const chatmessagescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ChatMessageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ChatMessageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ChatMessageScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ChatMessageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ChatMessageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  match_session_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  message: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  bad_words: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  raw_message: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ChatMessageScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ChatMessageScalarWhereWithAggregatesInput> = chatmessagescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ChatMessageScalarWhereWithAggregatesInput>;
export const ChatMessageScalarWhereWithAggregatesInputObjectZodSchema = chatmessagescalarwherewithaggregatesinputSchema;
