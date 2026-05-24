import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumMetricLogTypeWithAggregatesFilterObjectSchema as EnumMetricLogTypeWithAggregatesFilterObjectSchema } from './EnumMetricLogTypeWithAggregatesFilter.schema';
import { MetricLogTypeSchema } from '../enums/MetricLogType.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const metriclogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MetricLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MetricLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MetricLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MetricLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MetricLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_email: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  metric_type: z.union([z.lazy(() => EnumMetricLogTypeWithAggregatesFilterObjectSchema), MetricLogTypeSchema]).optional(),
  metric_value: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  metric_details: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MetricLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MetricLogScalarWhereWithAggregatesInput> = metriclogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MetricLogScalarWhereWithAggregatesInput>;
export const MetricLogScalarWhereWithAggregatesInputObjectZodSchema = metriclogscalarwherewithaggregatesinputSchema;
