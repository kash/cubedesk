import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const reportwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportWhereInputObjectSchema), z.lazy(() => ReportWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportWhereInputObjectSchema), z.lazy(() => ReportWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  reason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_by_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reported_user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  resolved_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  created_by: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  reported_user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const ReportWhereInputObjectSchema: z.ZodType<Prisma.ReportWhereInput> = reportwhereinputSchema as unknown as z.ZodType<Prisma.ReportWhereInput>;
export const ReportWhereInputObjectZodSchema = reportwhereinputSchema;
