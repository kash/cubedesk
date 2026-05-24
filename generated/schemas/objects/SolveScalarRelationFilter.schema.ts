import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SolveWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => SolveWhereInputObjectSchema).optional()
}).strict();
export const SolveScalarRelationFilterObjectSchema: z.ZodType<Prisma.SolveScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SolveScalarRelationFilter>;
export const SolveScalarRelationFilterObjectZodSchema = makeSchema();
