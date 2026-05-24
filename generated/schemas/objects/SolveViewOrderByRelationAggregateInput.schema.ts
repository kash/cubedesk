import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SolveViewOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SolveViewOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewOrderByRelationAggregateInput>;
export const SolveViewOrderByRelationAggregateInputObjectZodSchema = makeSchema();
