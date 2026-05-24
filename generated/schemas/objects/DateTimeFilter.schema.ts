import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedDateTimeFilterObjectSchema as NestedDateTimeFilterObjectSchema } from './NestedDateTimeFilter.schema'

const makeSchema = () => z.object({
  equals: z.date().optional(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterObjectSchema)]).optional()
}).strict();
export const DateTimeFilterObjectSchema: z.ZodType<Prisma.DateTimeFilter> = makeSchema() as unknown as z.ZodType<Prisma.DateTimeFilter>;
export const DateTimeFilterObjectZodSchema = makeSchema();
