import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { QueryModeSchema } from '../enums/QueryMode.schema';
import { NestedStringFilterObjectSchema as NestedStringFilterObjectSchema } from './NestedStringFilter.schema'

const makeSchema = () => z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  mode: QueryModeSchema.optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterObjectSchema)]).optional()
}).strict();
export const StringFilterObjectSchema: z.ZodType<Prisma.StringFilter> = makeSchema() as unknown as z.ZodType<Prisma.StringFilter>;
export const StringFilterObjectZodSchema = makeSchema();
