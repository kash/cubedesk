import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedFloatFilterObjectSchema as NestedFloatFilterObjectSchema } from './NestedFloatFilter.schema'

const makeSchema = () => z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatFilterObjectSchema)]).optional()
}).strict();
export const FloatFilterObjectSchema: z.ZodType<Prisma.FloatFilter> = makeSchema() as unknown as z.ZodType<Prisma.FloatFilter>;
export const FloatFilterObjectZodSchema = makeSchema();
