import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedFloatWithAggregatesFilterObjectSchema as NestedFloatWithAggregatesFilterObjectSchema } from './NestedFloatWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedFloatFilterObjectSchema as NestedFloatFilterObjectSchema } from './NestedFloatFilter.schema'

const makeSchema = () => z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterObjectSchema).optional()
}).strict();
export const FloatWithAggregatesFilterObjectSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.FloatWithAggregatesFilter>;
export const FloatWithAggregatesFilterObjectZodSchema = makeSchema();
