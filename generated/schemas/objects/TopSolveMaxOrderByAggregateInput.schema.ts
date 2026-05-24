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
export const TopSolveMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TopSolveMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveMaxOrderByAggregateInput>;
export const TopSolveMaxOrderByAggregateInputObjectZodSchema = makeSchema();
