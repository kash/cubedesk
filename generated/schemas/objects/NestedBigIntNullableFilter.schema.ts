import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const nestedbigintnullablefilterSchema = z.object({
  equals: z.bigint().optional().nullable(),
  in: z.bigint().array().optional().nullable(),
  notIn: z.bigint().array().optional().nullable(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([z.bigint(), z.lazy(() => NestedBigIntNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedBigIntNullableFilterObjectSchema: z.ZodType<Prisma.NestedBigIntNullableFilter> = nestedbigintnullablefilterSchema as unknown as z.ZodType<Prisma.NestedBigIntNullableFilter>;
export const NestedBigIntNullableFilterObjectZodSchema = nestedbigintnullablefilterSchema;
