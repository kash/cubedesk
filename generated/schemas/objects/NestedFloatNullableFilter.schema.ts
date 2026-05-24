import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const nestedfloatnullablefilterSchema = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedFloatNullableFilterObjectSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = nestedfloatnullablefilterSchema as unknown as z.ZodType<Prisma.NestedFloatNullableFilter>;
export const NestedFloatNullableFilterObjectZodSchema = nestedfloatnullablefilterSchema;
