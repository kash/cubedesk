import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedDateTimeNullableFilterObjectSchema as NestedDateTimeNullableFilterObjectSchema } from './NestedDateTimeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: z.date().optional().nullable(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional().nullable(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const DateTimeNullableFilterObjectSchema: z.ZodType<Prisma.DateTimeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.DateTimeNullableFilter>;
export const DateTimeNullableFilterObjectZodSchema = makeSchema();
