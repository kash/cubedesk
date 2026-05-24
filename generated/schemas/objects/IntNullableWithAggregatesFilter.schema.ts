import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedIntNullableWithAggregatesFilterObjectSchema as NestedIntNullableWithAggregatesFilterObjectSchema } from './NestedIntNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedFloatNullableFilterObjectSchema as NestedFloatNullableFilterObjectSchema } from './NestedFloatNullableFilter.schema'

const makeSchema = () => z.object({
  equals: z.number().int().optional().nullable(),
  in: z.number().int().array().optional().nullable(),
  notIn: z.number().int().array().optional().nullable(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterObjectSchema).optional()
}).strict();
export const IntNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.IntNullableWithAggregatesFilter>;
export const IntNullableWithAggregatesFilterObjectZodSchema = makeSchema();
