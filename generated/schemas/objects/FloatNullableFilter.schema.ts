import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedFloatNullableFilterObjectSchema as NestedFloatNullableFilterObjectSchema } from './NestedFloatNullableFilter.schema'

const makeSchema = () => z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const FloatNullableFilterObjectSchema: z.ZodType<Prisma.FloatNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.FloatNullableFilter>;
export const FloatNullableFilterObjectZodSchema = makeSchema();
