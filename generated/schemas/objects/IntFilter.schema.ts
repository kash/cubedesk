import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema'

const makeSchema = () => z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntFilterObjectSchema)]).optional()
}).strict();
export const IntFilterObjectSchema: z.ZodType<Prisma.IntFilter> = makeSchema() as unknown as z.ZodType<Prisma.IntFilter>;
export const IntFilterObjectZodSchema = makeSchema();
