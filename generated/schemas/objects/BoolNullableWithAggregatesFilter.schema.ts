import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedBoolNullableWithAggregatesFilterObjectSchema as NestedBoolNullableWithAggregatesFilterObjectSchema } from './NestedBoolNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedBoolNullableFilterObjectSchema as NestedBoolNullableFilterObjectSchema } from './NestedBoolNullableFilter.schema'

const makeSchema = () => z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterObjectSchema).optional()
}).strict();
export const BoolNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.BoolNullableWithAggregatesFilter>;
export const BoolNullableWithAggregatesFilterObjectZodSchema = makeSchema();
