import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  rotate: SortOrderSchema.optional(),
  cube_key: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  solution: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  scrambles: SortOrderSchema.optional()
}).strict();
export const AlgorithmOverrideMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideMaxOrderByAggregateInput>;
export const AlgorithmOverrideMaxOrderByAggregateInputObjectZodSchema = makeSchema();
