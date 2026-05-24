import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const nestedboolfilterSchema = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)]).optional()
}).strict();
export const NestedBoolFilterObjectSchema: z.ZodType<Prisma.NestedBoolFilter> = nestedboolfilterSchema as unknown as z.ZodType<Prisma.NestedBoolFilter>;
export const NestedBoolFilterObjectZodSchema = nestedboolfilterSchema;
