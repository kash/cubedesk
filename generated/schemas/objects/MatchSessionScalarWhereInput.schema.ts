import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema'

const matchsessionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MatchSessionScalarWhereInputObjectSchema), z.lazy(() => MatchSessionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MatchSessionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MatchSessionScalarWhereInputObjectSchema), z.lazy(() => MatchSessionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  min_players: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  max_players: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  match_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  custom_match: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  created_by_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  rated: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable()
}).strict();
export const MatchSessionScalarWhereInputObjectSchema: z.ZodType<Prisma.MatchSessionScalarWhereInput> = matchsessionscalarwhereinputSchema as unknown as z.ZodType<Prisma.MatchSessionScalarWhereInput>;
export const MatchSessionScalarWhereInputObjectZodSchema = matchsessionscalarwhereinputSchema;
