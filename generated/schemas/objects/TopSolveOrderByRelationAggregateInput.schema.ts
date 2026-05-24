import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TopSolveOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TopSolveOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveOrderByRelationAggregateInput>;
export const TopSolveOrderByRelationAggregateInputObjectZodSchema = makeSchema();
