import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveMethodStepWhereInputObjectSchema as SolveMethodStepWhereInputObjectSchema } from './SolveMethodStepWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SolveMethodStepWhereInputObjectSchema).optional(),
  some: z.lazy(() => SolveMethodStepWhereInputObjectSchema).optional(),
  none: z.lazy(() => SolveMethodStepWhereInputObjectSchema).optional()
}).strict();
export const SolveMethodStepListRelationFilterObjectSchema: z.ZodType<Prisma.SolveMethodStepListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepListRelationFilter>;
export const SolveMethodStepListRelationFilterObjectZodSchema = makeSchema();
