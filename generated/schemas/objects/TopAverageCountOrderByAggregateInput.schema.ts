import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  solve_1_id: SortOrderSchema.optional(),
  solve_2_id: SortOrderSchema.optional(),
  solve_3_id: SortOrderSchema.optional(),
  solve_4_id: SortOrderSchema.optional(),
  solve_5_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const TopAverageCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TopAverageCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCountOrderByAggregateInput>;
export const TopAverageCountOrderByAggregateInputObjectZodSchema = makeSchema();
