import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  colors: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  like_count: SortOrderSchema.optional(),
  private: SortOrderSchema.optional(),
  copy_of_id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  downloaded: SortOrderSchema.optional(),
  group_name: SortOrderSchema.optional(),
  scrambles: SortOrderSchema.optional(),
  solution: SortOrderSchema.optional(),
  alt_solutions: SortOrderSchema.optional(),
  three_d: SortOrderSchema.optional(),
  algo_type: SortOrderSchema.optional()
}).strict();
export const CustomTrainerMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomTrainerMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerMinOrderByAggregateInput>;
export const CustomTrainerMinOrderByAggregateInputObjectZodSchema = makeSchema();
