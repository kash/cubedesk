import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SolveWhereInputObjectSchema).optional(),
  some: z.lazy(() => SolveWhereInputObjectSchema).optional(),
  none: z.lazy(() => SolveWhereInputObjectSchema).optional()
}).strict();
export const SolveListRelationFilterObjectSchema: z.ZodType<Prisma.SolveListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SolveListRelationFilter>;
export const SolveListRelationFilterObjectZodSchema = makeSchema();
