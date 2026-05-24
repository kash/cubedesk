import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumMetricLogTypeFilterObjectSchema as EnumMetricLogTypeFilterObjectSchema } from './EnumMetricLogTypeFilter.schema';
import { MetricLogTypeSchema } from '../enums/MetricLogType.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const metriclogscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MetricLogScalarWhereInputObjectSchema), z.lazy(() => MetricLogScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MetricLogScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MetricLogScalarWhereInputObjectSchema), z.lazy(() => MetricLogScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  metric_type: z.union([z.lazy(() => EnumMetricLogTypeFilterObjectSchema), MetricLogTypeSchema]).optional(),
  metric_value: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  metric_details: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MetricLogScalarWhereInputObjectSchema: z.ZodType<Prisma.MetricLogScalarWhereInput> = metriclogscalarwhereinputSchema as unknown as z.ZodType<Prisma.MetricLogScalarWhereInput>;
export const MetricLogScalarWhereInputObjectZodSchema = metriclogscalarwhereinputSchema;
