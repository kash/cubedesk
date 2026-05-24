import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedDateTimeNullableWithAggregatesFilterObjectSchema as NestedDateTimeNullableWithAggregatesFilterObjectSchema } from './NestedDateTimeNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedDateTimeNullableFilterObjectSchema as NestedDateTimeNullableFilterObjectSchema } from './NestedDateTimeNullableFilter.schema'

const makeSchema = () => z.object({
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
export const DateTimeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter>;
export const DateTimeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
