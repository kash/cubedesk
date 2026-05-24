import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogTypeSchema } from '../enums/MetricLogType.schema';
import { NestedEnumMetricLogTypeWithAggregatesFilterObjectSchema as NestedEnumMetricLogTypeWithAggregatesFilterObjectSchema } from './NestedEnumMetricLogTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumMetricLogTypeFilterObjectSchema as NestedEnumMetricLogTypeFilterObjectSchema } from './NestedEnumMetricLogTypeFilter.schema'

const makeSchema = () => z.object({
  equals: MetricLogTypeSchema.optional(),
  in: MetricLogTypeSchema.array().optional(),
  notIn: MetricLogTypeSchema.array().optional(),
  not: z.union([MetricLogTypeSchema, z.lazy(() => NestedEnumMetricLogTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumMetricLogTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumMetricLogTypeFilterObjectSchema).optional()
}).strict();
export const EnumMetricLogTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumMetricLogTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumMetricLogTypeWithAggregatesFilter>;
export const EnumMetricLogTypeWithAggregatesFilterObjectZodSchema = makeSchema();
