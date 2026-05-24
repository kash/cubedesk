import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SolveOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SolveOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveOrderByRelationAggregateInput>;
export const SolveOrderByRelationAggregateInputObjectZodSchema = makeSchema();
