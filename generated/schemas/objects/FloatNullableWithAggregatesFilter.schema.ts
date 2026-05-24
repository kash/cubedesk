import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedFloatNullableWithAggregatesFilterObjectSchema as NestedFloatNullableWithAggregatesFilterObjectSchema } from './NestedFloatNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedFloatNullableFilterObjectSchema as NestedFloatNullableFilterObjectSchema } from './NestedFloatNullableFilter.schema'

const makeSchema = () => z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional()
}).strict();
export const FloatNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.FloatNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.FloatNullableWithAggregatesFilter>;
export const FloatNullableWithAggregatesFilterObjectZodSchema = makeSchema();
