import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedBigIntNullableFilterObjectSchema as NestedBigIntNullableFilterObjectSchema } from './NestedBigIntNullableFilter.schema'

const makeSchema = () => z.object({
  equals: z.bigint().optional().nullable(),
  in: z.bigint().array().optional().nullable(),
  notIn: z.bigint().array().optional().nullable(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([z.bigint(), z.lazy(() => NestedBigIntNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const BigIntNullableFilterObjectSchema: z.ZodType<Prisma.BigIntNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.BigIntNullableFilter>;
export const BigIntNullableFilterObjectZodSchema = makeSchema();
