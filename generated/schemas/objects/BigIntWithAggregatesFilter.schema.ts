import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedBigIntWithAggregatesFilterObjectSchema as NestedBigIntWithAggregatesFilterObjectSchema } from './NestedBigIntWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedFloatFilterObjectSchema as NestedFloatFilterObjectSchema } from './NestedFloatFilter.schema';
import { NestedBigIntFilterObjectSchema as NestedBigIntFilterObjectSchema } from './NestedBigIntFilter.schema'

const makeSchema = () => z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([z.bigint(), z.lazy(() => NestedBigIntWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterObjectSchema).optional()
}).strict();
export const BigIntWithAggregatesFilterObjectSchema: z.ZodType<Prisma.BigIntWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.BigIntWithAggregatesFilter>;
export const BigIntWithAggregatesFilterObjectZodSchema = makeSchema();
