import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogTypeSchema } from '../enums/MetricLogType.schema'

const nestedenummetriclogtypefilterSchema = z.object({
  equals: MetricLogTypeSchema.optional(),
  in: MetricLogTypeSchema.array().optional(),
  notIn: MetricLogTypeSchema.array().optional(),
  not: z.union([MetricLogTypeSchema, z.lazy(() => NestedEnumMetricLogTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumMetricLogTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumMetricLogTypeFilter> = nestedenummetriclogtypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumMetricLogTypeFilter>;
export const NestedEnumMetricLogTypeFilterObjectZodSchema = nestedenummetriclogtypefilterSchema;
