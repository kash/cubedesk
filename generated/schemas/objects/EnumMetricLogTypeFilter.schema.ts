import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogTypeSchema } from '../enums/MetricLogType.schema';
import { NestedEnumMetricLogTypeFilterObjectSchema as NestedEnumMetricLogTypeFilterObjectSchema } from './NestedEnumMetricLogTypeFilter.schema'

const makeSchema = () => z.object({
  equals: MetricLogTypeSchema.optional(),
  in: MetricLogTypeSchema.array().optional(),
  notIn: MetricLogTypeSchema.array().optional(),
  not: z.union([MetricLogTypeSchema, z.lazy(() => NestedEnumMetricLogTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumMetricLogTypeFilterObjectSchema: z.ZodType<Prisma.EnumMetricLogTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumMetricLogTypeFilter>;
export const EnumMetricLogTypeFilterObjectZodSchema = makeSchema();
