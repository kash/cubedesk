import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema'

const makeSchema = () => z.object({
  equals: z.number().int().optional().nullable(),
  in: z.number().int().array().optional().nullable(),
  notIn: z.number().int().array().optional().nullable(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const IntNullableFilterObjectSchema: z.ZodType<Prisma.IntNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.IntNullableFilter>;
export const IntNullableFilterObjectZodSchema = makeSchema();
