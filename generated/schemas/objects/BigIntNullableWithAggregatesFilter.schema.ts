import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedBigIntNullableWithAggregatesFilterObjectSchema as NestedBigIntNullableWithAggregatesFilterObjectSchema } from './NestedBigIntNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedFloatNullableFilterObjectSchema as NestedFloatNullableFilterObjectSchema } from './NestedFloatNullableFilter.schema';
import { NestedBigIntNullableFilterObjectSchema as NestedBigIntNullableFilterObjectSchema } from './NestedBigIntNullableFilter.schema'

const makeSchema = () => z.object({
  equals: z.bigint().optional().nullable(),
  in: z.bigint().array().optional().nullable(),
  notIn: z.bigint().array().optional().nullable(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([z.bigint(), z.lazy(() => NestedBigIntNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedBigIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedBigIntNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedBigIntNullableFilterObjectSchema).optional()
}).strict();
export const BigIntNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.BigIntNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.BigIntNullableWithAggregatesFilter>;
export const BigIntNullableWithAggregatesFilterObjectZodSchema = makeSchema();
