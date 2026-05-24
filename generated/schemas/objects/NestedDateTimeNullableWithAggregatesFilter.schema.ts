import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedDateTimeNullableFilterObjectSchema as NestedDateTimeNullableFilterObjectSchema } from './NestedDateTimeNullableFilter.schema'

const nesteddatetimenullablewithaggregatesfilterSchema = z.object({
  equals: z.date().optional().nullable(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional().nullable(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterObjectSchema).optional()
}).strict();
export const NestedDateTimeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = nesteddatetimenullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter>;
export const NestedDateTimeNullableWithAggregatesFilterObjectZodSchema = nesteddatetimenullablewithaggregatesfilterSchema;
