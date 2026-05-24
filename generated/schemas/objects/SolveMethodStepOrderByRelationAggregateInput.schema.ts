import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SolveMethodStepOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SolveMethodStepOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepOrderByRelationAggregateInput>;
export const SolveMethodStepOrderByRelationAggregateInputObjectZodSchema = makeSchema();
