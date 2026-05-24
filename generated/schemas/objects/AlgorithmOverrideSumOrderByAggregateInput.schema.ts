import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  rotate: SortOrderSchema.optional()
}).strict();
export const AlgorithmOverrideSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideSumOrderByAggregateInput>;
export const AlgorithmOverrideSumOrderByAggregateInputObjectZodSchema = makeSchema();
