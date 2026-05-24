import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  solve_id: SortOrderSchema.optional(),
  viewer_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const SolveViewMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SolveViewMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewMaxOrderByAggregateInput>;
export const SolveViewMaxOrderByAggregateInputObjectZodSchema = makeSchema();
