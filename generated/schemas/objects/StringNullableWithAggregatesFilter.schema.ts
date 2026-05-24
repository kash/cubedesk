import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { QueryModeSchema } from '../enums/QueryMode.schema';
import { NestedStringNullableWithAggregatesFilterObjectSchema as NestedStringNullableWithAggregatesFilterObjectSchema } from './NestedStringNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedStringNullableFilterObjectSchema as NestedStringNullableFilterObjectSchema } from './NestedStringNullableFilter.schema'

const makeSchema = () => z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  mode: QueryModeSchema.optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterObjectSchema).optional()
}).strict();
export const StringNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.StringNullableWithAggregatesFilter>;
export const StringNullableWithAggregatesFilterObjectZodSchema = makeSchema();
