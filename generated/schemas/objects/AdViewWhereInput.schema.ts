import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserAccountNullableScalarRelationFilterObjectSchema as UserAccountNullableScalarRelationFilterObjectSchema } from './UserAccountNullableScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const adviewwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AdViewWhereInputObjectSchema), z.lazy(() => AdViewWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AdViewWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AdViewWhereInputObjectSchema), z.lazy(() => AdViewWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ip_address: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ad_key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  view_time_seconds: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  browser_session_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clicked_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  pathname: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  last_session_started_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserAccountNullableScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const AdViewWhereInputObjectSchema: z.ZodType<Prisma.AdViewWhereInput> = adviewwhereinputSchema as unknown as z.ZodType<Prisma.AdViewWhereInput>;
export const AdViewWhereInputObjectZodSchema = adviewwhereinputSchema;
