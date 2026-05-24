import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AlgorithmOverrideOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideOrderByRelationAggregateInput>;
export const AlgorithmOverrideOrderByRelationAggregateInputObjectZodSchema = makeSchema();
