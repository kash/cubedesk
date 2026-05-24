import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedFloatNullableFilterObjectSchema as NestedFloatNullableFilterObjectSchema } from './NestedFloatNullableFilter.schema'

const nestedfloatnullablewithaggregatesfilterSchema = z.object({
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
export const NestedFloatNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter> = nestedfloatnullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter>;
export const NestedFloatNullableWithAggregatesFilterObjectZodSchema = nestedfloatnullablewithaggregatesfilterSchema;
