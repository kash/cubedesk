import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  solve_id: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const TopSolveMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TopSolveMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveMinOrderByAggregateInput>;
export const TopSolveMinOrderByAggregateInputObjectZodSchema = makeSchema();
