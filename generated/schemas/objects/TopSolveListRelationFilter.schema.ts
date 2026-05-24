import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveWhereInputObjectSchema as TopSolveWhereInputObjectSchema } from './TopSolveWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TopSolveWhereInputObjectSchema).optional(),
  some: z.lazy(() => TopSolveWhereInputObjectSchema).optional(),
  none: z.lazy(() => TopSolveWhereInputObjectSchema).optional()
}).strict();
export const TopSolveListRelationFilterObjectSchema: z.ZodType<Prisma.TopSolveListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveListRelationFilter>;
export const TopSolveListRelationFilterObjectZodSchema = makeSchema();
