import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { MatchSessionNullableScalarRelationFilterObjectSchema as MatchSessionNullableScalarRelationFilterObjectSchema } from './MatchSessionNullableScalarRelationFilter.schema';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './MatchSessionWhereInput.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const chatmessagewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ChatMessageWhereInputObjectSchema), z.lazy(() => ChatMessageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ChatMessageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ChatMessageWhereInputObjectSchema), z.lazy(() => ChatMessageWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  match_session_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  message: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  bad_words: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  raw_message: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  match_session: z.union([z.lazy(() => MatchSessionNullableScalarRelationFilterObjectSchema), z.lazy(() => MatchSessionWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const ChatMessageWhereInputObjectSchema: z.ZodType<Prisma.ChatMessageWhereInput> = chatmessagewhereinputSchema as unknown as z.ZodType<Prisma.ChatMessageWhereInput>;
export const ChatMessageWhereInputObjectZodSchema = chatmessagewhereinputSchema;
