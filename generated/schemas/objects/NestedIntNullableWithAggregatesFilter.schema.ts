import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedFloatNullableFilterObjectSchema as NestedFloatNullableFilterObjectSchema } from './NestedFloatNullableFilter.schema'

const nestedintnullablewithaggregatesfilterSchema = z.object({
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
export const NestedIntNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = nestedintnullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter>;
export const NestedIntNullableWithAggregatesFilterObjectZodSchema = nestedintnullablewithaggregatesfilterSchema;
