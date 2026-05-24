import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  rotate: SortOrderSchema.optional()
}).strict();
export const AlgorithmOverrideAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideAvgOrderByAggregateInput>;
export const AlgorithmOverrideAvgOrderByAggregateInputObjectZodSchema = makeSchema();
