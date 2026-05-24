import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const chatmessagescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ChatMessageScalarWhereInputObjectSchema), z.lazy(() => ChatMessageScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ChatMessageScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ChatMessageScalarWhereInputObjectSchema), z.lazy(() => ChatMessageScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  match_session_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  message: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  bad_words: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  raw_message: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ChatMessageScalarWhereInputObjectSchema: z.ZodType<Prisma.ChatMessageScalarWhereInput> = chatmessagescalarwhereinputSchema as unknown as z.ZodType<Prisma.ChatMessageScalarWhereInput>;
export const ChatMessageScalarWhereInputObjectZodSchema = chatmessagescalarwhereinputSchema;
