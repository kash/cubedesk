import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const matchscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MatchScalarWhereInputObjectSchema), z.lazy(() => MatchScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MatchScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MatchScalarWhereInputObjectSchema), z.lazy(() => MatchScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  winner_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  link_code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  match_session_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ended_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  started_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  spectate_code: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  aborted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const MatchScalarWhereInputObjectSchema: z.ZodType<Prisma.MatchScalarWhereInput> = matchscalarwhereinputSchema as unknown as z.ZodType<Prisma.MatchScalarWhereInput>;
export const MatchScalarWhereInputObjectZodSchema = matchscalarwhereinputSchema;
