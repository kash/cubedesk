import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { ChatMessageListRelationFilterObjectSchema as ChatMessageListRelationFilterObjectSchema } from './ChatMessageListRelationFilter.schema';
import { GameOptionsNullableScalarRelationFilterObjectSchema as GameOptionsNullableScalarRelationFilterObjectSchema } from './GameOptionsNullableScalarRelationFilter.schema';
import { GameOptionsWhereInputObjectSchema as GameOptionsWhereInputObjectSchema } from './GameOptionsWhereInput.schema';
import { MatchListRelationFilterObjectSchema as MatchListRelationFilterObjectSchema } from './MatchListRelationFilter.schema';
import { UserAccountNullableScalarRelationFilterObjectSchema as UserAccountNullableScalarRelationFilterObjectSchema } from './UserAccountNullableScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const matchsessionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MatchSessionWhereInputObjectSchema), z.lazy(() => MatchSessionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MatchSessionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MatchSessionWhereInputObjectSchema), z.lazy(() => MatchSessionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  min_players: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  max_players: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  match_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  custom_match: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  created_by_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  rated: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  chat_messages: z.lazy(() => ChatMessageListRelationFilterObjectSchema).optional(),
  game_options: z.union([z.lazy(() => GameOptionsNullableScalarRelationFilterObjectSchema), z.lazy(() => GameOptionsWhereInputObjectSchema)]).optional(),
  matches: z.lazy(() => MatchListRelationFilterObjectSchema).optional(),
  created_by: z.union([z.lazy(() => UserAccountNullableScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const MatchSessionWhereInputObjectSchema: z.ZodType<Prisma.MatchSessionWhereInput> = matchsessionwhereinputSchema as unknown as z.ZodType<Prisma.MatchSessionWhereInput>;
export const MatchSessionWhereInputObjectZodSchema = matchsessionwhereinputSchema;
