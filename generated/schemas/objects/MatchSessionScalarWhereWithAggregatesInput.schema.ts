import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema'

const matchsessionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MatchSessionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MatchSessionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MatchSessionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MatchSessionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MatchSessionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  min_players: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  max_players: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  match_type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  custom_match: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  created_by_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  rated: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable()
}).strict();
export const MatchSessionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MatchSessionScalarWhereWithAggregatesInput> = matchsessionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MatchSessionScalarWhereWithAggregatesInput>;
export const MatchSessionScalarWhereWithAggregatesInputObjectZodSchema = matchsessionscalarwherewithaggregatesinputSchema;
