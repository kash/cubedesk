import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedBigIntFilterObjectSchema as NestedBigIntFilterObjectSchema } from './NestedBigIntFilter.schema'

const makeSchema = () => z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([z.bigint(), z.lazy(() => NestedBigIntFilterObjectSchema)]).optional()
}).strict();
export const BigIntFilterObjectSchema: z.ZodType<Prisma.BigIntFilter> = makeSchema() as unknown as z.ZodType<Prisma.BigIntFilter>;
export const BigIntFilterObjectZodSchema = makeSchema();
