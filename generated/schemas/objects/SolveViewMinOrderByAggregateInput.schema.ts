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
export const SolveViewMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SolveViewMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewMinOrderByAggregateInput>;
export const SolveViewMinOrderByAggregateInputObjectZodSchema = makeSchema();
