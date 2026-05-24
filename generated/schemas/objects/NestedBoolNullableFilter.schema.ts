import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const nestedboolnullablefilterSchema = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedBoolNullableFilterObjectSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = nestedboolnullablefilterSchema as unknown as z.ZodType<Prisma.NestedBoolNullableFilter>;
export const NestedBoolNullableFilterObjectZodSchema = nestedboolnullablefilterSchema;
