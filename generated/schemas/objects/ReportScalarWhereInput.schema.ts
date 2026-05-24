import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const reportscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  reason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_by_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reported_user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  resolved_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const ReportScalarWhereInputObjectSchema: z.ZodType<Prisma.ReportScalarWhereInput> = reportscalarwhereinputSchema as unknown as z.ZodType<Prisma.ReportScalarWhereInput>;
export const ReportScalarWhereInputObjectZodSchema = reportscalarwhereinputSchema;
