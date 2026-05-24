import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NestedBoolFilterObjectSchema as NestedBoolFilterObjectSchema } from './NestedBoolFilter.schema'

const makeSchema = () => z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)]).optional()
}).strict();
export const BoolFilterObjectSchema: z.ZodType<Prisma.BoolFilter> = makeSchema() as unknown as z.ZodType<Prisma.BoolFilter>;
export const BoolFilterObjectZodSchema = makeSchema();
